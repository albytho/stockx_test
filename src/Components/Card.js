import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  handleClick(){
    alert("HELLOOO")
  }

  render() {
    return (
      <div className="Card">
        <div className="card">
            <img className="card-img-top" alt="card_element" src={this.props.image_name} onClick={this.handleClick}/>
            <h5 className="card-title">{this.props.title}</h5>
            <div className="card-block">
              <p className="card-text">{this.props.text}</p>
            </div>
        </div>
      </div>

    );
  }
}

export default Card;
