'use client';
import { useState, useEffect } from "react";
import { openAIAgentsQuestions as questions, QuizQuestion } from "@/lib/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false); // New state to manage quiz completion

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const q: QuizQuestion = questions[current];

  const handleSelect = (option: string) => {
    // Only allow selection if an option hasn't been chosen yet for the current question
    if (selected === null) {
      setSelected(option);
      setShowExplanation(true);
      if (option === q.answer) {
        setScore(prevScore => prevScore + 1); // Use functional update for score
      }
    }
  };

  const next = () => {
    // Check if there are more questions
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      // Quiz finished
      setQuizFinished(true); // Set quizFinished to true
    }
  };

  // Effect to show alert when quiz is finished
  useEffect(() => {
    if (quizFinished) {
      alert(`Quiz Finished! Your final score: ${score}/${questions.length}`);
      // Reset quiz
      setCurrent(0);
      setScore(0);
      setSelected(null);
      setShowExplanation(false);
      setQuizFinished(false); // Reset quizFinished state
    }
  }, [quizFinished, score, questions.length]);


  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-2xl mx-auto w-full transition-colors duration-300">
      <div className="flex justify-between mb-4 text-sm text-gray-600 dark:text-gray-300">
        <span>📍 Question {q.id} of {questions.length}</span>
        <span>🏆 Score: {score}</span>
      </div>
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Q{q.id}. {q.question}</h2>
      <ul className="space-y-2">
        {q.options.map((opt) => (
          <li key={opt}>
            <button
              className={`w-full px-4 py-2 rounded-xl border text-left transition-all duration-200 ${selected
                ? opt === q.answer
                  ? "bg-green-100 dark:bg-green-700 border-green-400"
                  : opt === selected
                  ? "bg-red-100 dark:bg-red-700 border-red-400"
                  : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600" // Added dark border for unselected
                : "hover:bg-blue-100 dark:hover:bg-blue-900 border-gray-300 dark:border-gray-700" // Default borders
              }`}
              onClick={() => handleSelect(opt)}
              // Disable button only if an option has been selected for the current question
              disabled={selected !== null}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      {showExplanation && (
        <div className="mt-5 p-4 bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-500 text-sm text-blue-900 dark:text-blue-200 rounded">
          ✅ <strong>Correct Answer:</strong> {q.answer}
          <p className="mt-2">{q.explanation}</p>
          <button
            onClick={next}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {current + 1 < questions.length ? "Next →" : "Finish Quiz"}
          </button>
        </div>
      )}
    </div>
  );
}



