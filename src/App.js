import React from 'react';

function Food({fav}){
  return <h2>I like {fav}.</h2>
}

function PropsFood(props){
  return <h2>I like {props.fav}.</h2>
}

function WhoAreYou({name, img}){
  return(
    <div>
      <h2>I'm {name}</h2>
      <img src={img} alt={name}/>
    </div>
  )
}

const foodILike = ["apple", "you"];

const livingThings =[
  {
    name: "Grace",
    image: "./grace.jpg"
  },
  {
    name: "Manse",
    image: "./manse.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Food fav="chicken"/>
      <PropsFood fav="삼겹살"/>
      {foodILike.map(function(foodName){
        return <Food fav = {foodName}/>
      })}
      {foodILike.map(foodName => <Food fav={foodName}/>)}
      {livingThings.map(thing => <WhoAreYou name={thing.name} img={thing.image}/>)}
    </div>
  );
}

export default App;
