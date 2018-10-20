import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  showModal(id){
    this.props.showModal(id);
  }

  render() {
    return (
      <div className="Card">
        <div className="card" data-toggle="modal" data-target="#exampleModal">
            <img className="card-img-top" alt="card_element" src={this.props.image_name} onClick={this.showModal.bind(this, this.props.id)}/> 
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
