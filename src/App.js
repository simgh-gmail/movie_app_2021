import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  //React.Component class doesn't have return but have render and state
  //state is object ==> put datas that we want to change
  //DO NOT CHANGE STATE DIRECTLY because react doesn't refresh the render
  //component is where we put our data.
  //Only function React component uses is render function
  constructor(props){   //constructor가 render보다 먼저 호출됨. 왜냐면 이건 js기 때문.
    super(props);
    console.log("hi");
  }
  state = {
    count: 0
  };
  add = () => {
    // this.state.count+=1;   Example of changing state directly.
    // but that doens't rerender. So we use setState!!!!!! setState "re"render.
    this.setState({count: this.state.count+1}) //But this isn't cool. since this.state form isn't not cool.
  };
  minus = () => {
    this.setState(current=>({count: current.count - 1}))  //it doesn't depend on external state.
  };
  componentDidMount(){    //component의 호출 전후 이런 과정을 제어
    //이런 것들을 component life cycle이라 함.
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, unmount.");
  }
  render(){
    console.log("I'm rendering");
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;
