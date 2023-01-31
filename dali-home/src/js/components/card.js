import React from 'react';

export class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardName: this.props.cardName, description: this.props.description, color: this.props.color, number: this.props.number};
  }
  render() {
    return (
      <div className={`outerCard ${this.props.className}`}>
        <div className="card" tabIndex={this.state.number}>
          <span><i class={this.props.icoon}></i></span>
          <h2>{this.state.cardName}</h2>
          <p>{this.state.description}</p>
          <p className="notice">{this.props.notice}</p>
        </div>
      </div>
    );
  }
}