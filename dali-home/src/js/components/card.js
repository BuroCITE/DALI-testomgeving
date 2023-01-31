import React from 'react';

export class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardName: this.props.name, description: this.props.description, color: this.props.color, number: this.props.number};
  }
  render() {
    return (
      <div className="card" tabindex={this.state.number}>
        <span className="material-symbols-outlined">menu_book</span>
        <h1>{this.state.cardName}</h1>
        <p>{this.state.description}</p>
    </div>
    );
  }
}