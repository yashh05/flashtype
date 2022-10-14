import React from 'react';
import "./testcontainer.css";
import Tryagain from '../tryagain/Tryagain';
import Typingchallengecontainer from '../typingchallengecontainer/Typingchallengecontainer';

const testcontainer=({selectedparagraph,words,characters,wpm,timeRemaining,timeStarted,testInfo,onchangeInput,startAgain,timeFinished}) =>{

  return (
    <div className='test-container'>
    {timeRemaining>0?
    (
      <div data-aos="fade-up" className='typing-challenge-cont'>
     <Typingchallengecontainer selectedparagraph={selectedparagraph} timeRemaining={timeRemaining} timeStarted={timeStarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} onchangeInput={onchangeInput}/>
    </div>
    ):( 
    <div className="try-again-cont">
    <Tryagain  words={words} characters={characters} wpm={wpm} startAgain={startAgain} />
    </div>)}
    </div>
  )
}
export default testcontainer;