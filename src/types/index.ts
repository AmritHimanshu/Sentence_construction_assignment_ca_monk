export interface Question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

export interface QuestionData {
  questions: Question[];
}

export interface QuestionCardProps {
  question: Question;
  onNextQuestion: (selectedWords: string[]) => void;
}

export interface ResultProps {
  questions: Question[];
  userAnswers:string[][];
}