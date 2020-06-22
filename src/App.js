import React from 'react';

function Animal({name,image}){
  return <div>
    <h3>I love {name}</h3>
    <img src={image} />
  </div>
}

// function Food(props){
//   console.log(props)
//   return <h3>I Love {props.name}</h3>
// }


const animalILike = [
  {name: "Cat", image: "https://topclass.chosun.com/news_img/1807/1807_008_1.jpg"},
  {name: "Dog", image: "https://i.ytimg.com/vi/ylPccmfeSGM/maxresdefault.jpg"},
  {name: "Hedgehog", image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/X82UKYOxRL9pKoej0FHW8cxrkS8.jpg"},
  {name: "Hamster", image: "https://i.pinimg.com/originals/78/95/a1/7895a14ce3659f68a4a09aaae260732a.jpg"},
  {name: "Rabbit", image: "https://i.fltcdn.net/contents/954/original_1420186557146_su59hk6gvi.jpeg"}
]

function App() {
  return (
    <div>
      <h1>My favorite food~</h1>
      {animalILike.map(animal=>
        <Animal name={animal.name} image={animal.image} />
      )}  

    </div>
  );
}

export default App;
