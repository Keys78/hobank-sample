import React, { useState } from 'react';

const questions: string[] = [
    'Write A - Z', 
    'Eat Bread and Egg',
    'visit mosw',
    'drp fan ',
    'drink chiken water',
    'annuy me',
    'lofo wjf s',
    'Uwalaka',
];

const RandomQuestionGenerator: React.FC = () => {
  const [randomQuestion, setRandomQuestion] = useState('');

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    setRandomQuestion(selectedQuestion);
  };

  return (
    <div>
      <h1>Question Challenge</h1>
      <button onClick={generateRandomQuestion}>Generate</button>
      {randomQuestion && <p>{randomQuestion}</p>}
    </div>
  );
};

export default RandomQuestionGenerator;
