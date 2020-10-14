import React from "react"
import "./App.css";

const FoodItem = (props) => {
    const {fdcId} = props.food
    return (
        <div>
            <h2><span className="tan">ID: {fdcId}</span></h2>
        </div>
    )
}
export default FoodItem
