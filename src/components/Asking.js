import React from "react";

/**
 * Enhanced Asking component with better styling for the name.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => {
  return (
    <div className="asking-container">
      {/* 1. Added a slight bounce animation class to the gif */}
      <img className="App-gif bounce" src={gif} alt={altText} />
      
      {/* 2. Personalized text with Sahithi's name in a bold, colored span */}
      <p className="App-text">
        Hello, <span style={{ color: "#ff4d6d", fontWeight: "bold" }}>Mrs. Sahithi</span>,
        <br />
        will you be my Valentine? ❤️
      </p>

      <div className="button-group">
        {/* 3. Accept Button */}
        <button 
          className="App-button yes-button" 
          onClick={handleAccept}
          style={{ backgroundColor: "#4CAF50", color: "white", margin: "10px", padding: "10px 25px", borderRadius: "20px", border: "none", cursor: "pointer" }}
        >
          Yes
        </button>

        {/* 4. Reject Button (The one that changes text) */}
        <button 
          className="App-button no-button" 
          onClick={handleReject}
          style={{ backgroundColor: "#f44336", color: "white", margin: "10px", padding: "10px 25px", borderRadius: "20px", border: "none", cursor: "pointer" }}
        >
          {noButtonText}
        </button>
      </div>
    </div>
  );
};

export default Asking;
