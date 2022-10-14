import React from 'react';
import ChallengeDetailsCard from 'C:/Users/lenovo/Desktop/projects/flashtype/src/component/challengeDetailsCard/challengeDetailsCard';
import Typingchallenge from 'C:/Users/lenovo/Desktop/projects/flashtype/src/component/typingchallenge/typingchallenge';

import "./Typingchallengecontainer.css";
const Typingchallengecontainer = (
  { words,characters,wpm,selectedparagraph,timeRemaining,
    timeStarted,testInfo,onchangeInput
  }
) => {
  return (
    <div className='typing-challenge-container'>

      <div className='details-container'>
        <ChallengeDetailsCard type="words" detail={words} />
        <ChallengeDetailsCard type="Character" detail={characters} />
        <ChallengeDetailsCard type="Wpm" detail={wpm} />
      </div>

      <div className='typewriter-container'>
     <Typingchallenge selectedparagraph={selectedparagraph} timeRemaining={timeRemaining} timeStarted={timeStarted} testInfo={testInfo} onchangeInput={onchangeInput}/>
      </div>
    

    </div>
  )
}
export default Typingchallengecontainer;