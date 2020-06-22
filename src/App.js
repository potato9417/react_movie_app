import React from 'react';

function Food({name}){
  console.log(name)
  return <h3>I Love {name}</h3>
}

// function Food(props){
//   console.log(props)
//   return <h3>I Love {props.name}</h3>
// }

function App() {
  return (
    <div>
      <h1>My favorite food~</h1>
      <Food name="pizza" />
      <Food name="kimbap" />
      <Food name="ddokbokki" />
      <Food name="ramen" />

    </div>
  );
}

export default App;
