import React from "react";
import "./app.css";
import Landing from "../landing/landing";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import ChallengeSection from "../Challengesection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
// import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

const TotalTime=60;

const DefaultState={
selectedParagraph:"hello",
timeStarted:false,
timeRemaining:TotalTime,
timeFinished:false,
words:0,
characters:0,
wpm:0,
testInfo:[]
};

class App extends React.Component{

state = DefaultState ;

startTimer = () => {
    this.setState({timeStarted:true})
    const timer = setInterval(()=>{
        if(this.state.timeRemaining>0){
            const timeSpent = TotalTime - this.state.timeRemaining;
            const wpm = timeSpent>0 ? (this.state.words/timeSpent)*TotalTime : 0 ;
            this.setState({timeRemaining : this.state.timeRemaining - 1,
            wpm:parseInt(wpm),})
        }else{
            clearInterval(timer);
        }
    },1000)
};

startAgain =() =>{
    this.fetchNewParagraphFallback();
}

handleUserInput = (inputValue) => {
    if (!this.state.timeStarted){
        this.startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index<0){
         this.setState({
             testInfo: [
                 {
                     testLetter: this.state.testInfo[0].testLetter,
                     status: "notAttempted",
                 },
                 ...this.state.testInfo.slice(1),
             ],
             characters,
             words
         })
         return;
    }
    if (index >= this.state.selectedParagraph.length){
        this.setState({characters,words});
        return ;
    }

    const testInfo = this.state.testInfo;
    if(!(index=== this.state.selectedParagraph.length-1)){
        testInfo[index+1].status="notAttempted";
    }
    
    const isCorrect = inputValue[index] ===testInfo[index].testLetter;

    testInfo[index].status= isCorrect ? "correct" : "incorrect";

    this.setState({testInfo,characters,words})
}

fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
        Math.floor((Math.random() * SAMPLE_PARAGRAPHS.length))
    ];
    const selectedParagraphArray = data.split("") ;
        const testInfo = selectedParagraphArray.map((selectedLetter)=>{
        return {
            testLetter: selectedLetter,
            status : "notAttempted"
        }
    })
    
    this.setState({
        ...DefaultState, 
        testInfo, 
        selectedParagraph:data});
}


componentDidMount(){
    this.fetchNewParagraphFallback();
}
render(){
return <div className="app">
<Nav />
<Landing />
<ChallengeSection 
    selectedparagraph={this.state.selectedParagraph}
    words={this.state.words}
    characters={this.state.characters}
    wpm={this.state.wpm}
    timeRemaining={this.state.timeRemaining}
    timeStarted={this.state.timeStarted}
    testInfo={this.state.testInfo}
    onchangeInput={this.handleUserInput}
    startAgain={this.startAgain}
    timeFinished={this.state.timeFinished}
/>
<Footer />
</div>
}
}

export default App;