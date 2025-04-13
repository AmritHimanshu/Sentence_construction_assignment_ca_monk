import React, { useState } from "react";
import { QuestionCardProps } from "../types";
import EastIcon from "@mui/icons-material/East";


const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onNextQuestion,
}) => {
  const [selectedWords, setSelectedWords] = useState<(string | null)[]>(
    Array(question.correctAnswer.length).fill(null)
  );
  const [usedWords, setUsedWords] = useState<string[]>([]);

  const parts = question.question.split("_____________");

  const handleSelectWord = (word: string) => {
    const emptyIndex = selectedWords.findIndex((w) => w === null);
    if (emptyIndex === -1 || usedWords.includes(word)) return;

    const newSelected = [...selectedWords];
    newSelected[emptyIndex] = word;

    setSelectedWords(newSelected);
    setUsedWords([...usedWords, word]);
  };

  const handleUnselect = (index: number) => {
    const word = selectedWords[index];
    if (!word) return;

    const newSelected = [...selectedWords];
    newSelected[index] = null;

    const newUsed = usedWords.filter((w) => w !== word);

    setSelectedWords(newSelected);
    setUsedWords(newUsed);
  };

  return (
    <div className="space-y-10">
      <p className="text-[23px] leading-14">
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < question.correctAnswer.length && (
              <span
                onClick={() => handleUnselect(i)}
                className="inline-block border-b-2 border-black min-w-[200px] text-center cursor-pointer mx-1"
              >
                {selectedWords[i] ? (
                  <span className="px-3 py-1 text-[16px] border-[1px] border-gray-600 rounded-md">
                    {selectedWords[i]}
                  </span>
                ) : (
                  " "
                )}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>

      <div className="flex gap-3 flex-wrap items-center justify-center">
        {question.options.map((word, i) => (
          <button
            key={i}
            onClick={() => handleSelectWord(word)}
            disabled={usedWords.includes(word)}
            className={`px-4 py-2 border rounded-md font-medium text-gray-800 cursor-pointer ${
              usedWords.includes(word) ? "hidden" : "border-gray-500"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      <div className="mt-4 text-right">
        <button
          onClick={() => onNextQuestion(selectedWords)}
          disabled={selectedWords.includes(null)}
          className={`py-2 px-4 border-[1px] rounded-md ${
            selectedWords.includes(null)
              ? "cursor-not-allowed border-gray-600"
              : "cursor-pointer border-blue-700 bg-blue-700 text-white"
          }`}
        >
          <EastIcon />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
