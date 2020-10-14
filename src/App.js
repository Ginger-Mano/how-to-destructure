import React, { Component } from 'react';
import './App.css';
import FoodsList from "./FoodsList"
import FoodItem from './FoodItem';

class App extends Component {
    state = {
      foods: []
    }

    componentDidMount() {
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_API}`)
        .then(res => res.json())
        .then(foodsArray => 
          this.setState({
            foods: foodsArray.foods.slice(0, 3)})
         
        )
    }


  render() {
    console.log(this.state.foods);
    const {foods} = this.state
    let chocbars = foods.map(food =>  <FoodsList foods={foods} food={food}/>)
    let chocbarItem = foods.map(food =>  <FoodItem foods={foods} food={food}/>)
  return (
    <div className="App">
      <br></br>
     <h1 className="title">Want something yummy?</h1>
     {chocbars}
     {chocbarItem}
     <img src="https://i.pinimg.com/originals/4c/74/69/4c746991737049fc59671693298d5d1e.gif"/>
    </div>
  );
  }
}

export default App;
