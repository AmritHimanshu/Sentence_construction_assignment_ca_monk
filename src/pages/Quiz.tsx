import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../utils/api";
import { Question } from "../types";
import QuestionCard from "../components/QuestionCard";
import Result from "../components/Result";

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(30);
      }
    }

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestionIndex, questions.length]);

  const handleNextQuestion = (selectedWords: string[]) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedWords;
    setUserAnswers(updatedAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else showResult();
  };

  const showResult = () => {
    setQuizFinished(true);
  };

  return (
    <div className="min-h-[100vh] py-10 flex justify-center items-center">
      {!quizFinished ? (
        <div className="max-w-4xl w-full p-10 shadow-2xl rounded-2xl">
          {loading ? (
            <p>Loading questions...</p>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div className="mb-4 text-2xl text-gray-700 font-medium">
                  <p>0:{timeLeft}</p>
                </div>
                <div>
                  <button className="border-[1px] border-gray-600 rounded-md font-medium px-5 py-2 cursor-pointer">
                    Quit
                  </button>
                </div>
              </div>

              <div className="flex space-x-3">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1/10 border-[2px] ${
                      i <= currentQuestionIndex
                        ? "border-amber-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                ))}
              </div>

              <div className="font-medium text-gray-600 text-[22px] text-center">
                Select the missing words in the correct order
              </div>

              <QuestionCard
                key={questions[currentQuestionIndex]?.questionId}
                question={questions[currentQuestionIndex]}
                onNextQuestion={handleNextQuestion}
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <Result
            questions={questions}
            userAnswers={userAnswers}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
