// import React from 'react'
import TestLetter from '../testLetter/testLetter';
import "./Typingchallenge.css";


// const Typingchallenge = ({
//   timeRemaining,
//   timeStarted,
//   testInfo, onchangeInput
// }) => {
//   return (
//     <div className='typing-challenge'>
//       <div className='timer-container'>
//         <p className='timer'>00:{timeRemaining}</p>
//         {/* {!timeStarted ?(<p className='timer-info'>start typing to start the Test!</p>):undefined} */}
//         <p className='timer-info'>
//           {!timeStarted && "start typing to start the Test!"}
//         </p>
//       </div>
//       <div className='textarea-container'>/
//         <div className='textarea-left'>

//           <div className="textarea test-paragraph">
//             {/* {selectedParagraph} */}

//             {testInfo && testInfo.map((indvidualLetterInfo, index) => {
//               return (<TestLetter
//                 key={index} 
//                 indvidualLetterInfo={indvidualLetterInfo}
//                 />
//               );
//             })
//             }
//           </div>

//         </div>
//         <div className='textarea-right'>
//           <textarea className='textarea' placeholder='start typing here' onChange={(e) => onchangeInput(e.target.value)} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Typingchallenge; 

import React from "react";
// import TestLetter from "../TestLetter/TestLetter";
// import "./TypingChallenge.css";

const TypingChallenge = ({
    testInfo,
    onchangeInput,
    timeRemaining,
    timerStarted,
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {testInfo&&testInfo.map((individualLetterInfo) => (
                            <TestLetter
                                individualLetterInfo={individualLetterInfo}
                            />
                        ))}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onchangeInput(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;