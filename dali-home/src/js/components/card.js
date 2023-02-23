import React from 'react';

export class Card extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <article className={`outerCard ${this.props.className}`}>
        <section className="card" tabIndex={this.props.number}>
          <span><i class={this.props.icoon}></i></span>
          <h2>{this.props.cardName}</h2>
          <p>{this.props.description}</p>
          <p className="notice">{this.props.notice}</p>
        </section>
      </article>
    );
  }
}