import React, { useState, useEffect } from "react";
import "./app.css";
import Landing from "../landing/landing";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import ChallengeSection from "../Challengesection/ChallengeSection";
// import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
import { useAppContext } from "../../context/AppContext";

const App = () => {
  const {state,startTimer,startAgain,handleUserInput}= useAppContext();


  return (
    <div className="app">
      <Nav />
      <Landing />
      <ChallengeSection
        selectedparagraph={state.selectedParagraph}
        words={state.words}
        characters={state.characters}
        wpm={state.wpm}
        timeRemaining={state.timeRemaining}
        timeStarted={state.timeStarted}
        testInfo={state.testInfo}
        onchangeInput={handleUserInput}
        startAgain={startAgain}
        timeFinished={state.timeFinished}
      />
      <Footer />
    </div>
  );
};

export default App;
