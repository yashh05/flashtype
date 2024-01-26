import ChallengeDetailsCard from "../challengeDetailsCard/challengeDetailsCard"
import Typingchallenge from '../typingchallenge/typingchallenge';
import "./Typingchallengecontainer.css";
import { useAppContext } from '../../context/AppContext';


const Typingchallengecontainer = () => {

  const {state}= useAppContext();

  return (
    <div className='typing-challenge-container'>

      <div className='details-container'>
        <ChallengeDetailsCard type="words" detail={state.words} />
        <ChallengeDetailsCard type="Character" detail={state.characters} />
        <ChallengeDetailsCard type="Wpm" detail={state.wpm} />
      </div>
      <div className='typewriter-container'>
     <Typingchallenge />
      </div>
    </div>
  )
}
export default Typingchallengecontainer;