import React, { useEffect, useRef, useState } from "react";
import { icons } from '../../library/res';
import { Dropdown } from "./dropdown";
/**
 * @param {string} accordionWrapperId provide a current ref from the accordion wrapper where all the accordions are children from. by providing values for this and unfoldButtonRef will result in the creation of an unfold button. if one of the two is missing or incorrect the button will not be made.
 * @param {ref} unfoldButtonId provide a current ref from a button to be used as the unfold button. by providing values for this and accordionWrapperRef will result in the creation of an unfold button. if one of the two is missing or incorrect the button will not be made.
 */
export class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.ref_badge = React.createRef();
    this.ref_details = React.createRef();

  }
  componentDidMount(){
    const badge = this.ref_badge.current;
    const details = this.ref_details.current;

    // add badge to all elements where the useBadge prop is true. fill badge with number of accordion-items inside that element.
    if(this.props.useBadge === true){
      const items = details.querySelectorAll('.accordion-item');
      badge.innerText = items.length;
    }
  }

  render(){
    return (
      <> 
        <details className={`dali-accordion-${this.props.accordionFeatures}`} ref={this.ref_details} data-has-badge={this.props.useBadge}>
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
  accordionFeatures: '',
  useBadge: false,
}


export function WrappedAccordion(props){
  const ref_wrapper = useRef();
  const ref_sortButton = props.sort;
  const ref_sortAscButton = props.sortAsc;
  const ref_sortPerChapter = props.sortPerChapter;
  const ref_unfoldButton = useRef();
  const [state, setState] = useState('per Hoofdstuk');

  useEffect( () => {
    const accordionWrapper = ref_wrapper.current;
    const sortChapterButton = ref_sortPerChapter.current;
    const sortDescButton = ref_sortButton.current;
    const sortAscButton = ref_sortAscButton.current;
    const unfoldButton = ref_unfoldButton.current;

    const setDropdownNameChapter = () => {
      setState('per Hoofdstuk');
    }
    
    const setDropdownNameAsc = () => {
      setState('Oplopend (a-z)');
    }
    
    const setDropdownNameDesc = () => {
      setState('Aflopend (z-a)');
    }

    sortChapterButton.addEventListener('click', setDropdownNameChapter);
    sortDescButton.addEventListener('click', setDropdownNameDesc);
    sortAscButton.addEventListener('click', setDropdownNameAsc);

    if(accordionWrapper != undefined 
    && unfoldButton != undefined){

      unfoldButton.addEventListener('click', () => {
        const allDetails = accordionWrapper.querySelectorAll('[class*=dali-accordion]');
        allDetails.forEach(oneDetail => {
          oneDetail.toggleAttribute('open');
        });
      });

      return () => {
        sortChapterButton.removeEventListener('click', setDropdownNameChapter);
        sortDescButton.removeEventListener('click', setDropdownNameDesc);
        sortAscButton.removeEventListener('click', setDropdownNameAsc);
      }
    }
  }, [])


  return(
    <section className="dali-accordionWrapper" ref={ref_wrapper}>
      <section className="bronverwijzingen-buttonbox wrapper-buttonbox">
        <Dropdown dropdownClass="accordion-dropdown-sort" dropdownFeatures={props.pageAccent} buttonIcon={state}>
          <button className="dali-dropdown-button" ref={ref_sortPerChapter}>
            {icons.iElement.list} Per Hoofdstuk
          </button>
          <button className="dali-dropdown-button" ref={ref_sortAscButton}>
            {icons.iElement.downArrowShortWide} Oplopend (a-z)
          </button>
          <button className="dali-dropdown-button" ref={ref_sortButton}>
            {icons.iElement.upArrowShortWide} Aflopend (z-a)
          </button>
        </Dropdown>
        &nbsp; {/* //todo: this &nbsp; should be handled via css. // ? temporary fix */}
        <button ref={ref_unfoldButton}>
          {icons.iElement.doubleDownArrow} uitklappen
        </button>
      </section>

      {props.children}

    </section>
  );
}

  
/**
 * 
 * @param {*} children all elements placed in between 2 of the components tags will be send as children of this element and are placed inside at the designated place. expects AccordionButtonBox or 1 element. multiple loose elements could be desplayed wrongly. 
 * @returns 
 */
export function AccordionBody(props){
  
  return (
    <ul className="accordion-body">
      {props.children}
    </ul>
  )
}

/**
 * 
 * @param {string} accordionItemFeatures 
 * @param {*} title the small heading of the item. will be loaded as h4.
 * @param {*} children all elements placed in between 2 of the components tags will be send as children of this element and are placed inside at the designated place. expects AccordionButtonBox or 1 element. multiple loose elements could be desplayed wrongly.
 * @returns an article with a h4 title. designated use is inside a AccordionBody or directly inside the Accordion.
 */
export function AccordionItem(props){

  return (
    <li className={`accordion-item ${props.accordionItemFeatures}`}>
      <h4 className="article-text">
        {props.title}
      </h4>

      {props.children}
    </li>
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

export function AccordionLoader(){
  
  return (
    <section aria-label="loading" className="accordion-loader">
      <span aria-hidden={true}>loading</span>
      <span aria-hidden={true}/>
      <span aria-hidden={true}/>
      <span aria-hidden={true}/>
    </section>
  )
}