export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const openAIAgentsQuestions: QuizQuestion[] = [


  {
    id: 1,
    question: "What is the OpenAI Agents SDK used for?",
    options: [
      "Image generation",
      "Building AI agents that can use tools and perform actions",
      "Game development",
      "Speech synthesis"
    ],
    answer: "Building AI agents that can use tools and perform actions",
    explanation: "The SDK is designed for tool-using AI agents, not image or speech tasks."
  },
  {
    id: 2,
    question: "Which method runs the agent in a loop until the task is done?",
    options: ["agent.run_forever()", "agent.invoke()", "runner.run()", "agent.execute()"],
    answer: "runner.run()",
    explanation: "`runner.run()` executes the goal-to-tools loop."
  },
  {
    id: 3,
    question: "What does the `Agent` class define in the Agents SDK?",
    options: [
      "UI components",
      "LLM model settings",
      "Agent behavior and tool usage logic",
      "API routes"
    ],
    answer: "Agent behavior and tool usage logic",
    explanation: "The `Agent` class encapsulates logic for how the AI uses tools and interacts."
  },
  {
    id: 4,
    question: "Which function is used to start an agent run with a user goal?",
    options: ["agent.execute()", "agent.start(goal)", "runner.run()", "agent.invoke(goal)"],
    answer: "agent.invoke(goal)",
    explanation: "`agent.invoke(goal)` starts the interaction with the agent based on the user’s goal."
  },
  {
    id: 5,
    question: "What is a 'tool' in the OpenAI Agents SDK?",
    options: [
      "A hardware device",
      "An API or function the agent can call",
      "A debugger",
      "A Next.js route"
    ],
    answer: "An API or function the agent can call",
    explanation: "Tools are functions/APIs exposed to the agent for problem-solving."
  },
  {
    id: 6,
    question: "Which SDK class is responsible for the LLM completion layer?",
    options: ["Agent", "Tool", "AsyncOpenAI", "RunConfig"],
    answer: "AsyncOpenAI",
    explanation: "`AsyncOpenAI` handles async communication with the OpenAI API in Agents SDK."
  },
  {
    id: 7,
    question: "How do you register tools for your agent?",
    options: [
      "Via useEffect()",
      "Pass them to the agent constructor",
      "Calling agent.use(tool)",
      "Importing in page.tsx"
    ],
    answer: "Pass them to the agent constructor",
    explanation: "You define tools in the `Agent` constructor as a list."
  },
  {
    id: 8,
    question: "Which method sends prompts to OpenAI using the SDK?",
    options: ["client.send()", "client.ask()", "client.complete()", "client.chat.completions.create()"],
    answer: "client.chat.completions.create()",
    explanation: "This is the SDK method for sending a chat completion prompt."
  },
  {
    id: 9,
    question: "Where do you typically set the OpenAI API key?",
    options: [".env", "config.json", "settings.yaml", "global.js"],
    answer: ".env",
    explanation: "Environment variables are used to store sensitive API keys like OpenAI keys."
  },
  {
    id: 10,
    question: "Which file typically defines your agent logic?",
    options: ["agent.ts", "quiz.ts", "prompt.json", "main.py"],
    answer: "agent.ts",
    explanation: "Most projects define agent logic in a dedicated `agent.ts` or `agent.js` file."
  },
  {
    id: 11,
    question: "What does `set_tracing_disabled(True)` do?",
    options: [
      "Disables LLM output",
      "Turns off tool invocation",
      "Stops debug tracing of the agent run",
      "Removes chat history"
    ],
    answer: "Stops debug tracing of the agent run",
    explanation: "This disables tracing logs used for debugging agent runs."
  },
  {
    id: 12,
    question: "What format is tool metadata provided in?",
    options: ["CSV", "YAML", "JSON schema", "Markdown"],
    answer: "JSON schema",
    explanation: "Tool input/output formats follow JSON schema for validation."
  },
  {
    id: 13,
    question: "Which method is used to define the agent's core logic?",
    options: ["run()", "handle()", "chat()", "invoke()"],
    answer: "handle()",
    explanation: "`handle()` defines how the agent processes input and decides on tool usage."
  },
  {
    id: 14,
    question: "What type of function is typically used as a tool?",
    options: ["React component", "Express middleware", "Async function", "Shell command"],
    answer: "Async function",
    explanation: "Tools are often defined as async functions to support API calls or IO."
  },
  {
    id: 15,
    question: "Where is `RunConfig` used?",
    options: ["To configure tool behavior", "To define quiz UI", "To manage runtime agent settings", "To style buttons"],
    answer: "To manage runtime agent settings",
    explanation: "`RunConfig` allows setting LLM, tracing, tool limits, etc."
  },
  {
    id: 16,
    question: "How do you test tool calling works?",
    options: ["Write unit tests", "Run agent and inspect traces", "Use console.log", "Only in production"],
    answer: "Run agent and inspect traces",
    explanation: "Traces show how agents select and call tools."
  },
  {
    id: 17,
    question: "What is the default OpenAI model in SDK?",
    options: ["gpt-3.5", "gpt-4", "gpt-4o", "No default"],
    answer: "gpt-4o",
    explanation: "The SDK uses `gpt-4o` (multi-modal) as default when supported."
  },
  {
    id: 18,
    question: "Which OpenAI feature enables tool calling?",
    options: ["Functions", "Embeddings", "Image models", "Speech APIs"],
    answer: "Functions",
    explanation: "Tool calling is implemented using OpenAI's function calling feature."
  },
  {
    id: 19,
    question: "What is the first step to define a tool?",
    options: ["Export it", "Create a JSON file", "Define a function and add a schema", "Call agent.register()"],
    answer: "Define a function and add a schema",
    explanation: "Tools start as functions with a defined input/output schema."
  },
  {
    id: 20,
    question: "What happens if an agent can’t decide on a tool?",
    options: ["It crashes", "It uses fallback tool", "It asks the user", "It sends an LLM-only reply"],
    answer: "It sends an LLM-only reply",
    explanation: "When tools aren't used, the LLM responds directly instead."
  },
  {
    id: 21,
    question: "Which SDK version supports `oai.tool()`?",
    options: ["v0.0.1", "v1.0.0+", "v2.0.0", "v0.9.9"],
    answer: "v1.0.0+",
    explanation: "The new `@oai/agents` tools are supported in v1.0+."
  },
  {
    id: 22,
    question: "How do you switch models in the SDK?",
    options: ["Modify agent.ts", "Update .env", "Set model in RunConfig", "You can't"],
    answer: "Set model in RunConfig",
    explanation: "`RunConfig` lets you customize the model name."
  },
  {
    id: 23,
    question: "What does `.invoke()` return?",
    options: ["JSX output", "HTML page", "LLM response or tool result", "Boolean"],
    answer: "LLM response or tool result",
    explanation: "This is how `.invoke()` passes back the answer to the user."
  },
  {
    id: 24,
    question: "How do you view step-by-step tool calls?",
    options: ["Check devtools", "Use agent.inspect()", "Enable tracing", "Enable logs"],
    answer: "Enable tracing",
    explanation: "Enable tracing to debug each decision the agent makes."
  },
  {
    id: 25,
    question: "Can the SDK support streaming?",
    options: ["No", "Yes with SSE/WebSocket", "Only in API mode", "Only in tools"],
    answer: "Yes with SSE/WebSocket",
    explanation: "Streaming works with proper setup (e.g., React server components or API)."
  },
  {
    id: 26,
    question: "Which function disables logs/tracing?",
    options: ["set_logs_disabled()", "disableLogs()", "set_tracing_disabled()", "tracing.off()"],
    answer: "set_tracing_disabled()",
    explanation: "`set_tracing_disabled()` disables trace output."
  },
  {
    id: 27,
    question: "How are user goals defined?",
    options: ["As intents", "As function parameters", "As strings", "As models"],
    answer: "As strings",
    explanation: "Goals are passed to the agent as strings."
  },
  {
    id: 28,
    question: "What happens if a tool throws an error?",
    options: ["Agent crashes", "LLM retries", "Error is logged and agent continues", "Nothing"],
    answer: "Error is logged and agent continues",
    explanation: "The agent logs the error and continues execution."
  },
  {
    id: 29,
    question: "Is the SDK available in Python?",
    options: ["Yes", "No", "Only for LLMs", "Only for LangChain"],
    answer: "No",
    explanation: "As of now, OpenAI’s Agents SDK is Node.js (JavaScript/TypeScript) only."
  },
  {
    id: 30,
    question: "What library is used to define tools with decorators?",
    options: ["FastAPI", "LangGraph", "oai.tools", "Next.js"],
    answer: "oai.tools",
    explanation: "`oai.tools` provides decorators to define tools cleanly with schema."
  }


];
