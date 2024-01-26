import React from "react";
import "./testcontainer.css";
import Tryagain from "../tryagain/Tryagain";
import Typingchallengecontainer from "../typingchallengecontainer/Typingchallengecontainer";
import { useAppContext } from "../../context/AppContext";

const Testcontainer = () => {
  const { state } = useAppContext();

  return (
    <div className="test-container">
      {state.timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <Typingchallengecontainer />
        </div>
      ) : (
        <div className="try-again-cont">
          <Tryagain />
        </div>
      )}
    </div>
  );
};
export default Testcontainer;
