import React from 'react';
import PropTypes from 'prop-types';

function Food({fav}){
  return <h2>I like {fav}.</h2>
}

function PropsFood(props){
  return <h2>I like {props.fav}.</h2>
}

function WhoAreYou({name, img, rating}){
  return(
    <div>
      <h2>I'm {name}</h2> {rating}/999
      <img src={img} alt={name}/>
    </div>
  )
}

function renderThing(feature){
  return(
    <div>
      <h2>I'm {feature.name}</h2>
      <img src={feature.image} alt={feature.name}/>
    </div>
  )
  /*return(
    <WhoAreYou key={feature.id} name={feature.name} img={feature.image}/>
  )*/
}

WhoAreYou.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const livingThings =[
  {
    id: 1,
    name: "Grace",
    image: "./grace.jpg",
    rating: 123
  },
  {
    id: 2,
    name: "Manse",
    image: "./manse.jpg",
    rating: 456
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Food fav="chicken"/>
      <PropsFood fav="삼겹살"/>
      {livingThings.map(thing=><WhoAreYou key={thing.id} name={thing.name} img={thing.image} rating={thing.rating}/>)}
      {/*{livingThings.map(renderThing)}*/}
    </div>
  );
}

export default App;
