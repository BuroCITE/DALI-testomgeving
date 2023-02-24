import React from "react";

export class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.ref_badge = React.createRef();
    this.ref_details = React.createRef();

  }
  componentDidMount(){
    const badge = this.ref_badge.current;
    const details = this.ref_details.current;
    if(this.props.useBadge === true){
      const items = details.querySelectorAll('.accordion-item');
      badge.innerText = items.length;
    }
  }

  render(){
    return (
      <> 
        <details className={`dali-accordion${this.props.accordionFeatures}`} ref={this.ref_details} data-has-badge={this.props.useBadge}>
          <summary >
            <h3>{this.props.title}</h3>
            <mark className="dali-badge" ref={this.ref_badge} data-usebadge={this.props.useBadge}></mark>
            <i class="fa-solid fa-angle-down"></i>
          </summary>
          {this.props.children}
        </details>
      </>
    );
  }
}
Accordion.defaultProps = {
  useBadge: false,
}

/**
 * 
 * @param {*} children all elements placed in between 2 of the components tags will be send as children of this element and are placed inside at the designated place. expects AccordionButtonBox or 1 element. multiple loose elements could be desplayed wrongly. 
 * @returns 
 */
export function AccordionBody(props){
  
  return (
    <section className="accordion-body">
      {props.children}
    </section>
  )
}

/**
 * 
 * @param {*} title the small heading of the item. will be loaded as h4.
 * @param {*} children all elements placed in between 2 of the components tags will be send as children of this element and are placed inside at the designated place. expects AccordionButtonBox or 1 element. multiple loose elements could be desplayed wrongly.
 * @returns an article with a h4 title. designated use is inside a AccordionBody or directly inside the Accordion.
 */
export function AccordionItem(props){

  return (
    <article className="accordion-item">
      <h4 className="article-text">
        {props.title}
      </h4>

      {props.children}
    </article>
  );
}

/**
 * 
 * @param {*} children all elements placed in between 2 of the components tags will be send as children of this element and are placed inside at the designated place. expects 1 or more buttons. other elements could be desplayed wrongly.
 * @returns a section for buttons to be displayed side by side. intended use is inside the AccordionItem component.
 */
export function AccordionButtonBox(props){

  return(
    <section className="button-box">
      {props.children}
    </section>
  );
}