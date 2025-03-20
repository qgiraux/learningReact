import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which continent is Brazil located on?',
    options: ['Asia', 'Europe', 'South America', 'Africa'],
    correctAnswer: 'South America',
  },
  {
    question: 'Which country has the Great Barrier Reef?',
    options: ['USA', 'Canada', 'Australia', 'India'],
    correctAnswer: 'Australia',
  },
];

const App = () => {
  // State to track the current question index and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer('');
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Geography Quiz</h1>
      <div>
        <h2>{currentQuestion.question}</h2>
        <div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option)}
              style={{
                backgroundColor: selectedAnswer === option ? 'lightblue' : '',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default App;
