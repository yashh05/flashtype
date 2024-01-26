import { useAppContext } from '../../context/AppContext';
import TestLetter from '../testLetter/testLetter';
import "./Typingchallenge.css";


const TypingChallenge = () => {

    const {state,handleUserInput}= useAppContext();

    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {state.timeRemaining >= 10 ? state.timeRemaining : `0${state.timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!state.timerStarted && "Start typing to start the test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {state.testInfo&&state.testInfo.map((individualLetterInfo) => (
                            <TestLetter
                                individualLetterInfo={individualLetterInfo}
                            />
                        ))}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => handleUserInput(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;