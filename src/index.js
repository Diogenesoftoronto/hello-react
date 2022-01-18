import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Reset from './components/Reset'
// import Name from './components/Name'


// const Button = (props) => {
//   // your code here
// };
const ResetButton = props => {
  const {reset} = props;
  return (
    <buttton onClick={reset}>Reset</buttton>
  );
};

const Name = props => {
  const {name, writeName} = props;
  return (
    <>
      <input value={name} placeholder="Type your name" onChange={writeName}></input>
    </>
  );
};

const Application = () => {
  const [name, setName] = useState("");
  const writeName = (event) => setName(event.target.value);

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };
  return (
    <main>
      <Name name={name} writeName={writeName}/>
      <ResetButton reset={reset}/>
      {name ? <h1>Hello {name}</h1> : <></>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
