import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { readPreference, writePreference } from '../src/scripts/storage.js';

test('blocked browser storage keeps preferences usable for the current page', (t) => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  t.after(() => {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  });
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true, get() { throw new Error('SecurityError'); }
  });
  assert.equal(readPreference('blocked-language'), null);
  writePreference('blocked-language', 'tr');
  assert.equal(readPreference('blocked-language'), 'tr');
  writePreference('blocked-language', 'en');
  assert.equal(readPreference('blocked-language'), 'en');

  const stored = new Map();
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
    getItem: (key) => stored.get(key) ?? null,
    setItem: (key, value) => stored.set(key, value)
  }});
  stored.set('existing-theme', 'dark');
  assert.equal(readPreference('existing-theme'), 'dark');
  writePreference('existing-theme', 'light');
  assert.equal(stored.get('existing-theme'), 'light');
});

test('first paint uses the system theme when reading storage throws', () => {
  const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
  const script = layout.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
  const root = { dataset: {} };
  const context = {
    document: { documentElement: root, querySelector: () => null },
    matchMedia: () => ({ matches: true })
  };
  Object.defineProperty(context, 'localStorage', { get() { throw new Error('SecurityError'); }});
  vm.runInNewContext(script, context);
  assert.equal(root.dataset.theme, 'dark');
});
