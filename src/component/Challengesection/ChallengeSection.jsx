import "./Challengesection.css";
import Testcontainer from "../testcontainer/Testcontainer";

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a speed test now!
      </h1>
      <Testcontainer />
    </div>
  );
};

export default ChallengeSection;
