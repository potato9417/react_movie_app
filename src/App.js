import React from 'react';
import PropTypes from "prop-types";

function Animal({name,image,rating}){
  return <div>
    <h3>I love {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={image} alt={name}/>
  </div>
}

// function Food(props){
//   console.log(props)
//   return <h3>I Love {props.name}</h3>
// }


const animalILike = [
  {id: 1, name: "Cat", image: "https://topclass.chosun.com/news_img/1807/1807_008_1.jpg", rating: 4.6},
  {id: 2, name: "Dog", image: "https://i.ytimg.com/vi/ylPccmfeSGM/maxresdefault.jpg", rating: 4.2},
  {id: 3, name: "Hedgehog", image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/X82UKYOxRL9pKoej0FHW8cxrkS8.jpg", rating: 4.8},
  {id: 4, name: "Hamster", image: "https://i.pinimg.com/originals/78/95/a1/7895a14ce3659f68a4a09aaae260732a.jpg", rating: 3.9},
  {id: 5, name: "Rabbit", image: "https://i.fltcdn.net/contents/954/original_1420186557146_su59hk6gvi.jpeg", rating: 3.2}
]

// https://reactjs.org/docs/typechecking-with-proptypes.html
Animal.propTypes={
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>My favorite animal~</h1>
      {animalILike.map(animal=>
        <Animal key={animal.id} name={animal.name} image={animal.image} rating={animal.rating} />
      )}  

    </div>
  );
}

export default App;
