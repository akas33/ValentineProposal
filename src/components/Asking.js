import React from "react";

const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <div style={{ textAlign: 'center' }}>
    <img className="App-gif" src={gif} alt={altText} />
    {/* Added the star thingy here too! */}
    <p className="App-text" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
      Hello Sweety, will you be my Valentine, Bro? 👊❤️✨
    </p>
    <div>
      <button className="App-button" onClick={handleAccept} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 25px", borderRadius: "20px", border: "none", margin: "5px" }}>
        Yes
      </button>
      <button className="App-button" onClick={handleReject} style={{ backgroundColor: "#f44336", color: "white", padding: "10px 25px", borderRadius: "20px", border: "none", margin: "5px" }}>
        {noButtonText}
      </button>
    </div>
  </div>
);

export default Asking;
