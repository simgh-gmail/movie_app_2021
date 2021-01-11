import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  //React.Component class doesn't have return but have render and state
  //state is object ==> put datas that we want to change
  //DO NOT CHANGE STATE DIRECTLY because react doesn't refresh the render
  //component is where we put our data.
  //Only function React component uses is render function
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(()=>{
    this.setState({isLoading: false})},2000);
  }
  render(){
    const {isLoading}=this.state;     //ES6 문법 
    return(
      <div>
        {this.state.isLoading ? "Loading" :"We are ready"}
        {isLoading ? "Loading..." :"We are ready"}
      </div>
    )
  }
}

export default App;
