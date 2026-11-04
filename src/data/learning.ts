export interface Course {
  id: string;
  title: string;
  provider: string;
  summary?: string;
  href?: string;
  status: "in progress" | "next";
  /** YYYY.MM, or a range. Only set once the course has a start date. */
  date?: string;
  done?: string[];
  next?: string[];
}

/**
 * Mirrors "AI Engineering Training" on the CV. In progress first, then queue
 * order. Move topics from next to done as a course progresses.
 */
export const courses: Course[] = [
  {
    id: "claude-api",
    title: "Building with the Claude API",
    provider: "Anthropic Academy",
    summary: "Prompt evaluation covered test datasets with code and model-based grading.",
    href: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    status: "in progress",
    date: "2026.10",
    done: ["Claude API", "prompt evaluation", "prompt engineering"],
    next: ["tool use", "RAG", "prompt caching", "MCP", "agents and workflows"],
  },
  {
    id: "study-program",
    title: "AI Engineer Study Program",
    provider: "Self-directed",
    summary:
      "LLM APIs, RAG, agents and MCP, evaluation and deployment. Each stage ends with a finished project.",
    status: "in progress",
    date: "2026.10 – 2027.02",
  },
  {
    id: "rag",
    title: "Retrieval Augmented Generation",
    provider: "DeepLearning.AI",
    href: "https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/",
    status: "next",
  },
  {
    id: "mcp",
    title: "Introduction to MCP",
    provider: "Anthropic",
    href: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
    status: "next",
  },
  {
    id: "agents",
    title: "AI Agents Course",
    provider: "Hugging Face",
    href: "https://huggingface.co/learn/agents-course",
    status: "next",
  },
];
