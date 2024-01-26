import React, { createContext, useState, useEffect, useContext } from "react";
import { SAMPLE_PARAGRAPHS } from "../data/sampleParagraphs";

const TotalTime = 60;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    selectedParagraph: "hello",
    timeStarted: false,
    timeRemaining: TotalTime,
    timeFinished: false,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  });

  const startTimer = () => {
    setState((prevState) => ({ ...prevState, timeStarted: true }));

    const timer = setInterval(() => {
      if (state.timeRemaining > 0) {
        setState((prevState) => {
          const timeSpent = TotalTime - prevState.timeRemaining;
          const wpm = timeSpent > 0 ? (prevState.words / timeSpent) * TotalTime : 0;

          return {
            ...prevState,
            timeRemaining: prevState.timeRemaining - 1,
            wpm: parseInt(wpm),
          };
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  const startAgain = () => {
    fetchNewParagraphFallback();
  };

  const handleUserInput = (inputValue) => {
    if (!state.timeStarted) {
      startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      setState((prevState) => ({
        ...prevState,
        testInfo: [
          {
            testLetter: prevState.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...prevState.testInfo.slice(1),
        ],
        characters,
        words,
      }));
      return;
    }
    if (index >= state.selectedParagraph.length) {
      setState((prevState) => ({ ...prevState, characters, words }));
      return;
    }

    const testInfo = state.testInfo;
    if (!(index === state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    setState((prevState) => ({ ...prevState, testInfo, characters, words }));
  };

  const fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    setState({
      ...state,
      testInfo,
      selectedParagraph: data,
    });
  };

  useEffect(() => {
    fetchNewParagraphFallback();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        startTimer,
        startAgain,
        handleUserInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
