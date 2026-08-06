"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const EMAIL = "talhacaglarr@proton.me";

type Status = "idle" | "sending" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!message.trim()) {
      next.message = "Message is required";
    } else if (message.trim().length < 10) {
      next.message = "Message should be at least 10 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <motion.div
          className="ambient-orb"
          style={{
            width: "clamp(200px, 45vw, 350px)",
            height: "clamp(200px, 45vw, 350px)",
            top: "10%",
            left: "5%",
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="ambient-orb"
          style={{
            width: "clamp(180px, 40vw, 300px)",
            height: "clamp(180px, 40vw, 300px)",
            bottom: "5%",
            right: "8%",
          }}
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 26, ease: "easeInOut", repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-[var(--glass-border)] font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            Bursa · UTC+3
          </span>
          <h2
            className="font-display font-semibold tracking-[-0.03em] leading-[1.08] text-[var(--text)] mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Have something in mind?
          </h2>
          <p
            className="max-w-xl mx-auto text-[var(--text-muted)]"
            style={{ fontSize: "clamp(1.0625rem, 2vw, 1.25rem)" }}
          >
            Write to me about security, Linux tooling, or anything we could build together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass border-[var(--glass-border)] rounded-3xl p-6 md:p-10 flex flex-col gap-5"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              disabled={status === "sending"}
              autoComplete="name"
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              disabled={status === "sending"}
              autoComplete="email"
            />
          </div>

          <Textarea
            label="Message"
            placeholder="Tell me what you have in mind…"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={errors.message}
            disabled={status === "sending"}
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button type="submit" size="lg" isLoading={status === "sending"} className="w-full sm:w-auto">
              Send Message
              <Send className="w-5 h-5" aria-hidden="true" />
            </Button>

            <motion.a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm"
              whileHover={{ x: 3 }}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {EMAIL}
            </motion.a>
          </div>
        </motion.form>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-strong border ${
              status === "success"
                ? "border-[rgba(168,85,247,0.4)] text-[var(--text)]"
                : "border-red-500/40 text-red-300"
            } safe-bottom safe-x`}
            initial={{ opacity: 0, y: 40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
          >
            {status === "success" ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
                <span className="text-sm font-medium">Your email client should be open now.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Something went wrong. Email me directly.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}