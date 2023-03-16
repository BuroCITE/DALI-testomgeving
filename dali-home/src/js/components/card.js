import React from 'react';

/**
 * @param {string} cardClass expects a className that can be applaid to the outerCard.
 * @param {string} cardFeatures expects a class attribute for the variants of the card. can choose from: all colors in theme-colors; (this can be found in the variables.scss), disabled (makes the card appear disabled) 
 * @param {string} cardHref expects a href link to go to a page this card is referencing.
 * @param {*} icon an icon that can be placed inside the card. will be shown 3 times as big as the font size.
 * @param {string} cardTitle an h2 title inside the card. recommended number of characters is 20
 * @param {string} description description of the card. will be shown under the title.
 * @param {string} notice a notice wich wil be shown even smaller and under the description.
 * @param {string} ariaText REQUIRED (for accesibility) - the text that wil be loaded in the aria label.
 * @returns a card wich will grow and shrink in size (5px) on hover or focus. has no defined width to account for uses in grids or unusual sizes.
 */
export class Card extends React.Component {
  constructor(props){
    super(props);
    this.ref_link = React.createRef();
  }
  
  componentDidMount(){
    const link = this.ref_link.current;

    if(this.props.cardFeatures.includes("disabled")){
      link.removeAttribute("href");
    }
  }

  render() {
    return (
      // the use of article and or section comes from the need to use semantic tags. accentialy they are a replacement for div.
      // ? not much is know (yet) about region. it apears do do the same as div but is not visible in the accesibility tree.
      // TODO: research "region" and look for more like it.
      <section aria-label="card" className={`outerCard ${this.props.cardClass} dali-card-${this.props.cardFeatures}`}>
        <a ref={this.ref_link} aria-label={this.props.ariaText} href={this.props.cardHref} className="card">
          <span>{this.props.icon}</span>
          <h2>{this.props.cardName}</h2>
          <p>{this.props.description}</p>
          <p className="notice">{this.props.notice}</p>
        </a>
      </section>
    );
  }
}
/**
 * the default values of the props called inside the Card class
 */
Card.defaultProps = {
  tabIndexNumber: "0",
  cardClass: "",
}