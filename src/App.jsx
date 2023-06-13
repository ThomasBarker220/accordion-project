import { useState } from "react";
import questions_data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(questions_data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
