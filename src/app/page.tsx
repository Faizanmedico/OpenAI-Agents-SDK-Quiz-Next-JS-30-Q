import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">Welcome to the GIAIC Quiz!</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300 text-center max-w-md">
        Test your knowledge of the OpenAI Agents SDK with this interactive quiz.
      </p>
      <Link href="/quiz">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          🚀 Start Quiz
        </button>
      </Link>
    </main>
  );
}
