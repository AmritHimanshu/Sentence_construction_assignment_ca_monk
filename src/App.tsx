import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
