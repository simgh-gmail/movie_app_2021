import React from 'react';

function Food(props){
  console.log(props);
  return <h2>I like potato.</h2>
}

function App() {
   return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>asdf</h2>
      <Food 
      fav="chicken"
      />
    </div>
  );
}

export default App;
