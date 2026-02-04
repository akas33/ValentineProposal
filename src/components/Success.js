import React from "react";
import kisses from "../kisses.gif";

const Success = () => (
  <div className="App-success" style={{ textAlign: 'center', padding: '20px' }}>
    <img className="App-gif" src={kisses} alt="Kisses" />
    
    {/* Star thingy added to the main heading */}
    <h2 style={{ color: "#ff4d6d", marginTop: "20px" }}>Let's go, Bro! 👊❤️✨⭐</h2>

    <div style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444" }}>
      <p className="App-text-success">
        You are the one who <strong>inspires me</strong> every single day. ⭐
      </p>
      <p className="App-text-success">
        I’m so grateful for how you <strong>care for me</strong>, and for how 
        truly <strong>beautiful</strong> you are, Sweety. ✨
      </p>
      
      <p className="App-text-success" style={{ fontWeight: "bold", marginTop: "20px", color: "#ff4d6d" }}>
        Can't wait for another Valentine's with you! 👊✨❤️⭐
      </p>
    </div>

    <div style={{ marginTop: "30px", opacity: 0.7 }}>
      <p style={{ margin: 0, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
        Since you said yes on
      </p>
      {/* Keeping that legendary date and time */}
      <p className="App-text-date" style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#555" }}>
        December 7, 2021 • 7:00 PM
      </p>
    </div>
  </div>
);

export default Success;
