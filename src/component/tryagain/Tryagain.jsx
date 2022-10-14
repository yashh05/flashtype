import React from 'react';
import "./tryagain.css";

export default function tryagain({words,characters,wpm ,startAgain}) {
    return (
    <div className='try-again-container'>
<h1>Try Again</h1>

<div className='result-container'> 
    <p>
        <b>characters:</b>{characters}
    </p>
    <p>
        <b>Words:</b>{words}
    </p>
    <p>
        <b>Speed:</b>{wpm} wpm
    </p>
</div>

<div>
    <button onClick={startAgain} className='btn start-again-btn'> Retry</button>
    <button className='btn share-btn' onClick={()=>{
        window.open("https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam",
        "facebook-share-dialog",
        "width=800,height=600")
    }}> 
    share
    </button>
    <button className='btn tweet-btn'>Tweet </button>
</div> 
    </div>

  )
}
