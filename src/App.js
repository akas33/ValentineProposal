import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

/**
 * Main App component for the proposal to Bebe.
 */
const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);
    
    // Updated these to be personal and funny for Bebe!
    const rejectionTexts = [
      "Are you sure, Bebe? 🥺",
      "But it's been since 2021! 😲",
      "Don't do this to me, Bro... 💔",
      "Think of the memories! ✨",
      "You're breaking my heart! 😭",
      "Bebe, please?? ⭐",
      "Wrong button, try the green one! 😂",
      "I'm gonna tell your mom! 🏃‍♂️",
    ];

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
