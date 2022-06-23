import { React, useState } from "react";

const Home = () => {

  const[number, setNumber]=useState(0);

  const addToNumber = () => {
    setNumber(number + 1);
  }

  const subtractFromNumber = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <p>I lost the game {number} times</p>
      <button onClick={addToNumber}>Increase</button>
      <button onClick={subtractFromNumber}>Decrease</button>
    </div>
  )
}

export default Home;