import React, {useState, useEffect} from 'react';

const Title = () => {
    return <div> <h1>102 REACT LAB</h1><h3>Zack Guerra</h3><br /></div>;
};

export default function ChallengeOne() {


      
    const [status, setStatus] = useState(true);
  
    const clickButton1 = () => {
      setStatus(false);
    };
    const clickButton2 = () => {
      setStatus(true);
    };
  
    useEffect(() => {
      console.log("called");
    });
  
    return (
      <div className="App">
        <Title />
        <h1>Challenge I</h1>
        <h1>{status ? "This is the Right Text" : "This is the Left Text"}</h1>
  
        <button onClick={() => {clickButton1 ()}}>🢀Show Left</button>
        <button onClick={() => {clickButton2 ()}}>Show Right🢂</button>
  
      </div>
    );
}