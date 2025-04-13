import { useNavigate } from "react-router-dom";
import { ResultProps } from "../types";
import { useEffect, useState } from "react";

function Result({ questions, userAnswers }: ResultProps) {
  const navigate = useNavigate();

  const [totalScore, setTotalScore] = useState(0);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (
        JSON.stringify(question.correctAnswer) ===
        JSON.stringify(userAnswers[index])
      ) {
        score += 1;
      }
    });
    return score;
  };

  useEffect(() => {
    const score = calculateScore();
    setTotalScore(score);
  }, []);

  const getAnswerStatus = (correct: string[], selected: string[]) => {
    return JSON.stringify(correct) === JSON.stringify(selected)
      ? "Correct"
      : "Incorrect";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center mx-auto">
          <span className="text-4xl font-bold text-green-600">
            {Math.round((totalScore / questions.length) * 100)}
          </span>
        </div>
        <h2 className="text-xl font-semibold mt-2">Overall Score</h2>
        <p className="mt-4 max-w-lg text-gray-700">
          While you correctly formed several sentences, there are a couple of
          areas where improvement is needed. Pay close attention to sentence
          structure and word placement to ensure clarity and correctness. Review
          your responses below for more details.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition cursor-pointer"
        >
          Go to Dashboard
        </button>
      </div>

      <div className="w-full max-w-3xl space-y-24">
        {questions.map((q, index) => {
          const correctAnswer = q.correctAnswer;
          const userAnswer = userAnswers[index];
          const isCorrect =
            getAnswerStatus(correctAnswer, userAnswer) === "Correct";

          let correctIdx = 0;
          let userIdx = 0;

          const correctSentence = q.question.replace(
            /_____________/g,
            () => correctAnswer[correctIdx++] || "______"
          );
          const userSentence = q.question.replace(/_____________/g, () =>
            Array.isArray(userAnswer)
              ? userAnswer[userIdx++] || "______"
              : "______"
          );

          return (
            <div
              key={index}
              className={`rounded-xl shadow-lg bg-white overflow-hidden ${
                isCorrect
                  ? "bg-green50 border-l-4 border-green-400 shadow-green-100"
                  : "bg-red50 border-l-4 border-red-400 shadow-red-100"
              }`}
            >
              <div className="p-5 space-y-3">
                <p className="flex items-center justify-between">
                  <span className="p-1 text-gray-700 bg-gray-100 text-[13px] rounded-xl">
                    Prompt
                  </span>
                  <span className="text-[13px]">
                    {index + 1}/{questions.length}
                  </span>
                </p>
                <p className="font-medium text-gray-800">{correctSentence}</p>
              </div>

              <div className="p-5 space-y-3 bg-gray-50">
                <p className="font-medium text-gray-600 text-[14px]">
                  Your response{" "}
                  <span
                    className={`${
                      isCorrect
                        ? "text-green-600 bg-green-50"
                        : "text-red-600 bg-red-50"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </p>
                <p className="text-gray-800">{userSentence}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
