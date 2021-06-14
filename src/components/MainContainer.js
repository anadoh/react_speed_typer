import React, { useState } from "react";

const MainContainer = () => {
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [word, setWord] = useState('birthday')

  return (
    <div className="container">
      <h2>
        <i className="fas fa-paw"></i> Speed Typer{" "}
        <i className="fas fa-paw"></i>
      </h2>
      <small>Typing the following:</small>
      <h1 id="word" value={word} onChange={e => setWord(e.target.value)}>{word}</h1>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) =>setText(e.target.value)}
        placeholder="Type the word here..."
      />
      <p className="time-container">
        Time left:{" "}
        <span id="time" value={time}>
          {time}s
        </span>
      </p>
      <p className="score-container">
        Score{" "}
        <span id="score" value={score}>
          {score}
        </span>
      </p>
      <div className="end-game-container" id="end-game-container"></div>
    </div>
  );
};

export default MainContainer;
