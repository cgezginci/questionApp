import "./App.css";

import { useState, useEffect } from "react";
import Start from "./Components/Start";
import Questions from "./Components/Questions";
import Result from "./Components/Result";
import questions from "./question";

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleStart = () => {
    setCount(1);
    setShowOptions(false);
  };

  useEffect(() => {
    const optionsTimer = setTimeout(() => {
      setShowOptions(true);
    }, 1000);

    if (showOptions) {
      clearTimeout(optionsTimer);
    }

    return () => {
      clearTimeout(optionsTimer);
    };
  }, [count]);

  const handleNext = (selectedOption) => {
    const answerData = {
      question: questions[count - 1].question,
      correctAnswer: questions[count - 1].answer,
      selectedAnswer: selectedOption,
    };
    if (selectedOption === questions[count - 1].answer) {
      setCorrect(correct + 1);
    }

    setAnswers([...answers, answerData]);

    if (count < questions.length) {
      setCount(count + 1);
    } else {
      setCount(-1);
    }

    setShowOptions(false);
  };

  return (
    <div className="container">
      {count === 0 && <Start onStart={handleStart} />}
      {count > 0 && count <= questions.length && (
        <Questions
          question={questions[count - 1].question}
          options={questions[count - 1].options}
          media={questions[count - 1].media}
          onNext={handleNext}
          showOptions={showOptions}
        />
      )}
      {count === -1 && (
        <Result correct={correct} total={questions.length} answers={answers} />
      )}
    </div>
  );
}

export default App;
