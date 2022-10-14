import React from 'react';
import "./Challengesection.css";
import Testcontainer from '../testcontainer/Testcontainer';

const ChallengeSection = ({selectedparagraph, words,characters,wpm,timeRemaining,timeStarted,testInfo,onchangeInput,startAgain,timeFinished}) => {
  return (
    <div className='challenge-section-container'>
<h1 data-aos="fade-down" className='challenge-section-header'>
    Take a speed test now!
</h1>
<Testcontainer   selectedparagraph={selectedparagraph}
    words={words}
    characters={characters}
    wpm={wpm}
    timeRemaining={timeRemaining}
    timeStarted={timeStarted}
    testInfo={testInfo}
    onchangeInput={onchangeInput}
    startAgain={startAgain}
    timeFinished={timeFinished}
     />
    </div>
  )
}

export default ChallengeSection