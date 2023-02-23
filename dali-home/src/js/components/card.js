import React from 'react';

/**
 * @param {string} cardClass expects a className that can be applaid to the outerCard.
 * @param {string} cardFeatures expects a class attribute for the variants of the card. can choose from: all colors in theme-colors; this can be found in the variables.scss 
 * @param {string} cardHref expects a href link to go to a page this card is referencing.
 * @param {*} icon an icon that can be placed inside the card. will be shown 3 times as big as the font size.
 * @param {string} cardTitle an h2 title inside the card. recommended number of characters is 20
 * @param {string} description description of the card. will be shown under the title.
 * @param {string} notice a notice wich wil be shown even smaller and under the description
 * @returns a card wich will grow and shrink in size (5px) on hover or focus. has no defined width to account for uses in grids or unusual sizes.
 */
export class Card extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      // the use of article and section comes from the need to use semantic tags. accentialy they are a replacement for div.
      <article className={`outerCard ${this.props.cardClass} dali-card-${this.props.cardFeatures}`}>
        <a href={this.props.cardHref} className="card">
          <span>{this.props.icon}</span>
          <h2>{this.props.cardName}</h2>
          <p>{this.props.description}</p>
          <p className="notice">{this.props.notice}</p>
        </a>
      </article>
    );
  }
}
/**
 * the default values of the props called inside the Card class
 */
Card.defaultProps = {
  tabIndexNumber: "0",
}