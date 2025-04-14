import { QuestionData } from "../types";
import static_data from '../../data.json';

export const fetchQuestions = async (): Promise<QuestionData> => {
  // const res = await fetch("http://localhost:3001/data");
  // // const res = await fetch("/api/data");
  // if (!res.ok) throw new Error("Failed to fetch questions");
  // const data: QuestionData = await res.json();
  // return data;
  return static_data.data;
};
