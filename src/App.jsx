import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState(5);
  const [showWish, setShowWish] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "Running the birthday script... 🎂",
    "Executing party mode... 🎉💻",
    "Initializing fun... 🎁💻"
  ];



  // Countdown logic with message change
  useEffect(() => {
    if (countdown > 0) {
      const messageInterval = setInterval(() => {
        setCurrentMessage(messages[countdown % messages.length]);
      }, 1000); // Change message every 1 second

      const timer = setTimeout(() => setCountdown(countdown - 1), 1100);

      return () => {
        clearInterval(messageInterval); // Cleanup the message interval
        clearTimeout(timer); // Cleanup the countdown timer
      };
    } else {
      setShowWish(true);
    }
  }, [countdown]);

  return (
    <div className="App">
      <header className="App-header">
        {countdown > 0 ? (
          <div className="countdown">
            <h2>{currentMessage}</h2>
            <h1>T-minus {countdown}... 🚀</h1>
          </div>
        ) : showWish ? (
          <div className="wish-container">
            <h1 className="title">🎉 Happy Landing Day 🎉</h1>
            <h2 className="wish-title">🎉🎉 Sufyan!!! 🎉🎉</h2>
            <p className="cake-message">No birthday cake 🍰 :</p>
            <h3>But don’t worry</h3>
            <h3>Tayyab has got one for you: 🎂 </h3>
            <Cake />
            <p className="footer-message">
    "Wishing you a bug-free birthday and a year full of success! 🐞🎉",
    "Here's to another year of great code and even greater adventures! 🚀",
    "May your day be filled with laughters! 🎂😂"
            </p>
          </div>
        ) : null}
      </header>
    </div>
  );
}

const Cake = () => (
  <div className="cake-container">
    <img
      className="cake-image"
      src="https://img.freepik.com/free-photo/fun-bulldog-3d-illustration_183364-80989.jpg?t=st=1732822605~exp=1732826205~hmac=862df14b9b761a6b038bfef56b9eaa2b410d149b931c3a1669399bb5b0331ab1&w=740"
      alt="Funny Cake"
    />
  </div>
);

export default App;
