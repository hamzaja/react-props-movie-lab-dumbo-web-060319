import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    if (!this.props.rating){
      return<h4>No Rating Found</h4>
    }
    else{ return <img src={imgMapper[this.props.rating]} alt="" />}

  }

  render() {
    console.log(this.props.rating)
    return (
      <div className="card-back">
      {this.props.title}
        <h3 className="title"></h3>
        <span />
        {this.props.genres.join(", ")}
        {this.generateRatingElement()}
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */ }
        <span />

        <h5 className="genres"></h5>
      </div>
    )
  }
}
