import type { SketchName } from "@/data/projects";

/*
 * Projects with no public repository have no screenshot to show, so their cards
 * draw the system instead. Every box is a step the CV describes. Blue marks the
 * only step that calls a language model. Labels stay short so they remain
 * readable when the card shrinks to phone width.
 */

const COLS = [24, 234, 444];
const WIDTH = 172;
const HEIGHT = 74;
const ROW = { top: 44, bottom: 190 };
const NOTE_Y = 318;
/** Where an edge leaves or enters a box. */
const midX = (col: number) => COLS[col] + WIDTH / 2;
const midY = (y: number) => y + HEIGHT / 2;

type Point = [number, number];

function Box({
  col,
  y,
  label,
  model = false,
}: {
  col: number;
  y: number;
  label: string;
  model?: boolean;
}) {
  return (
    <g>
      <rect
        x={COLS[col]}
        y={y}
        width={WIDTH}
        height={HEIGHT}
        rx={7}
        fill={model ? "var(--accent-wash)" : "var(--bg)"}
        stroke={model ? "var(--accent)" : "var(--line-strong)"}
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={midX(col)}
        y={midY(y)}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={24}
        fill={model ? "var(--accent-text)" : "var(--body)"}
      >
        {label}
      </text>
    </g>
  );
}

function Edge({ points }: { points: Point[] }) {
  const [px, py] = points[points.length - 2];
  const [x, y] = points[points.length - 1];
  const angle = Math.atan2(y - py, x - px);
  const head = (offset: number): Point => [x - 11 * Math.cos(angle + offset), y - 11 * Math.sin(angle + offset)];
  const [h1x, h1y] = head(0.5);
  const [h2x, h2y] = head(-0.5);
  const d = points.map(([ex, ey], i) => `${i ? "L" : "M"}${ex} ${ey}`).join(" ");

  return (
    <g fill="none" stroke="#6b6b6b" strokeLinejoin="round" strokeLinecap="round">
      <path d={d} vectorEffect="non-scaling-stroke" />
      <path d={`M${h1x} ${h1y} L${x} ${y} L${h2x} ${h2y}`} vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/** Left-to-right edge between two neighbouring boxes on one row. */
function Step({ from, y }: { from: number; y: number }) {
  return <Edge points={[[COLS[from] + WIDTH, midY(y)], [COLS[from + 1], midY(y)]]} />;
}

function Note({ children }: { children: string }) {
  return (
    <text x={COLS[0]} y={NOTE_Y} fontSize={22} fill="var(--faint)">
      {children}
    </text>
  );
}

function AkilliEkstre() {
  return (
    <>
      <Box col={0} y={ROW.top} label="statement" />
      <Box col={1} y={ROW.top} label="calculate" />
      <Box col={2} y={ROW.top} label="report" />
      <Step from={0} y={ROW.top} />
      <Step from={1} y={ROW.top} />

      <Edge
        points={[
          [midX(1), ROW.top + HEIGHT],
          [midX(1), ROW.top + HEIGHT + 36],
          [midX(0), ROW.top + HEIGHT + 36],
          [midX(0), ROW.bottom],
        ]}
      />
      <Box col={0} y={ROW.bottom} label="allowlist" />
      <Box col={1} y={ROW.bottom} label="LLM" model />
      <Box col={2} y={ROW.bottom} label="validate" />
      <Step from={0} y={ROW.bottom} />
      <Step from={1} y={ROW.bottom} />
      <Edge points={[[midX(2), ROW.bottom], [midX(2), ROW.top + HEIGHT]]} />

      <Note>optional · failures are dropped</Note>
    </>
  );
}

function ShortVideo() {
  const top = ROW.top;
  const bottom = ROW.bottom;
  const x = COLS[1];

  return (
    <>
      <Box col={0} y={top} label="topic" />
      <Box col={0} y={bottom} label="transcript" />

      <rect
        x={x}
        y={top}
        width={WIDTH}
        height={bottom + HEIGHT - top}
        rx={7}
        fill="var(--accent-wash)"
        stroke="var(--accent)"
        vectorEffect="non-scaling-stroke"
      />
      <text x={midX(1)} y={top + 46} textAnchor="middle" fontSize={24} fill="var(--accent-text)">
        LLM layer
      </text>
      {["Gemini", "Claude", "OpenRouter"].map((provider, i) => (
        <text key={provider} x={midX(1)} y={top + 106 + i * 36} textAnchor="middle" fontSize={22} fill="var(--muted)">
          {provider}
        </text>
      ))}

      <Box col={2} y={top} label="video" />
      <Box col={2} y={bottom} label="clips" />

      <Step from={0} y={top} />
      <Step from={0} y={bottom} />
      <Step from={1} y={top} />
      <Step from={1} y={bottom} />

      <Note>JSON · cache · fact-check · human approval</Note>
    </>
  );
}

function ClarSec() {
  return (
    <>
      <Box col={0} y={ROW.top} label="Nmap scan" />
      <Box col={1} y={ROW.top} label="parser" />
      <Box col={2} y={ROW.top} label="findings" />
      <Step from={0} y={ROW.top} />
      <Step from={1} y={ROW.top} />

      <Edge points={[[midX(1), ROW.top + HEIGHT], [midX(1), ROW.bottom]]} />
      <Box col={1} y={ROW.bottom} label="LLM" model />
      <Box col={2} y={ROW.bottom} label="evidence" />
      <Step from={1} y={ROW.bottom} />
      <Edge points={[[midX(2), ROW.bottom], [midX(2), ROW.top + HEIGHT]]} />

      <Note>optional · provider error: rules only</Note>
    </>
  );
}

const sketches: Record<SketchName, { label: string; draw: () => React.ReactNode }> = {
  "akilli-ekstre": {
    label:
      "Flow of Akıllı Ekstre. A statement is calculated into a report without a model. Optionally, an allowlist filters data for the LLM, and its response must pass validation to reach the report. Failures are dropped.",
    draw: AkilliEkstre,
  },
  "short-video": {
    label:
      "Flow of Short Video Automation. A topic and a transcript go through one LLM layer over Gemini, Claude and OpenRouter, producing a video and clips, with structured JSON, caching, fact-checking and human approval.",
    draw: ShortVideo,
  },
  clarsec: {
    label:
      "Flow of ClarSec. An Nmap scan goes through a parser to findings without a model. Optional LLM analysis must pass an evidence check, and provider errors fall back to the rules.",
    draw: ClarSec,
  },
};

export function Sketch({ name }: { name: SketchName }) {
  const { label, draw: Draw } = sketches[name];
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={label} className="h-full w-full font-mono">
      <Draw />
    </svg>
  );
}
