import React, {Component} from "react"
import './App.css';

class FoodsList extends Component {
    state = {
        somethingClicked: false
    }

    handleClickYellow = (evt) => {
        console.log(evt);
        this.setState({
            somethingClicked: true
        })
    }

    handleUnclick = (evt) => {
        this.setState({
            somethingClicked: false
        })
    }
    render() {
        // console.log(this.props);
        const {somethingClicked} = this.state
        const {description, ingredients} = this.props.food
        return(
            somethingClicked ? 
            <div className="cyan" onClick={this.handleUnclick}>
                <h2>{description}</h2>
                <h3>{ingredients}</h3>
            </div> :

            <div className="yellow" onClick={this.handleClickYellow}>
            <h2>{description}</h2>
            <h3>{ingredients}</h3>
            </div>
        )
    }
}
export default FoodsList