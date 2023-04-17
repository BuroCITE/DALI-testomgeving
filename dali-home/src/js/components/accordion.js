import React, { createElement, useEffect, useRef, useState } from "react";
import { icons } from '../../library/res';
import { DataPerItem, DataPerChapter } from "./AccordionFunctions";
import {getOrientatedData} from "../functions/dataFunctions"
import { Dropdown } from "./dropdown";
import { InvisibleLink } from "./invisibleLink";

/**
 * @param {string} accordionWrapperId provide a current ref from the accordion wrapper where all the accordions are children from. by providing values for this and unfoldButtonRef will result in the creation of an unfold button. if one of the two is missing or incorrect the button will not be made.
 * @param {ref} unfoldButtonId provide a current ref from a button to be used as the unfold button. by providing values for this and accordionWrapperRef will result in the creation of an unfold button. if one of the two is missing or incorrect the button will not be made.
 */
export function Accordion(props){
    const ref_badge = useRef();
    const ref_details = useRef(null);

    // console.log(details)
    // var allLinks = details.querySelectorAll('a');
    // console.log(props.children.props.data);
    // console.log(childrenJson);
    // while newChildren < 3 {if props.children[i].isAccesable == true{newChildren++}}
    // let countedChildren = 0;
    // for (let i = 0; i < props.children.length; i++) {
    //   if(props.children.props.data[i].isAccessable === true){
    //     console.log('done')
    //     countedChildren = 1;
    //   }
    //   else{
    //     console.log('else?')
    //   }
    // }
    // props.children.forEach(child => {
    //   if(child.isAccesable == true){

    //   }
    // });
    // var allLinks = [1,1,1,1,1];
    // if(Array.isArray(props.children)){}
    // else if(props.children.props.data.length >= 3){
    //   // console.log('hello world! there are more then 3 items in this accordion');
    //   // const nextAccordion = details.nextSibling;
    //   // console.log(nextAccordion); 
    //   return (
    //     <InvisibleLink invisibleLinkFeatures="red-right-slide-in" linkText="test link"/>
    //   );
    // }
    // else{
    //   return
    // }
  // }
  // const getValidChildren = (children: React.ReactNode) => {
  //    return React.Children.toArray(children).filter((child) =>
  //      React.isValidElement(child),
  //     ) as React.ReactElement[]
  //   }

  // checkInvisibleLinkRequired() {
  const checkInvisibleLinkRequired = () => {
    // const details = this.ref_details.current;
    // var allLinks = details.querySelectorAll('a');
    // const nextAccordion = details.nextSibling;
    //? the above code connot be used at the moment because of a lack of insight.

    var allLinks = 0
    if(props.children.props.data != undefined){
      allLinks = props.children.props.data.length;
    }
    
    // 3 has been chosen because it will take 4 clicks with 3 elements without skiplink, and 2 clicks with skiplink. so its a number chosen for the best afficiantie but also no unnessary addons.
    if(allLinks >= 3){
      return (
        <InvisibleLink
            // target={nextAccordion}
            invisibleLinkFeatures="red-right-slide-in" 
            linkText="test link"/>
      );
    }
    else{
      return
    }
  }

  useEffect(() => {
    const badge = ref_badge.current;
    const details = ref_details.current;

    // add badge to all elements where the useBadge prop is true. fill badge with number of accordion-items inside that element.
    if(props.useBadge === true){
      const items = details.querySelectorAll('.accordion-item');
      badge.innerText = items.length;
    }
  },[]);

  return (
    <> 
      <details className={`dali-accordion-${props.accordionFeatures}`} ref={ref_details} data-has-badge={props.useBadge}>
        <summary>
          <h3>{props.title}</h3>
          <mark className="dali-badge" ref={ref_badge} data-usebadge={props.useBadge}></mark>
          {icons.iElement.downArrow}
        </summary>
        {checkInvisibleLinkRequired()}
        {props.children}
      </details>
    </>
  );
}

Accordion.defaultProps = {
  accordionFeatures: '',
  useBadge: false,
}


export function WrappedAccordion(props){
  const ref_wrapper = useRef();
  const ref_sortButton = useRef(null);
  const ref_sortAscButton = useRef(null);
  const ref_sortPerChapter = useRef(null);
  const ref_unfoldButton = useRef();
  const [orientation, setOrientation] = useState('perChapter');
  const [state, setState] = useState('Per Hoofdstuk');

  const dataOrientation = () => {
    if(orientation == "perChapter"){
      return (
        <DataPerChapter
        accordionFeatures={`${props.pageAccent}`}
        data={props.chapterData}  />
      )
    }

    else if(orientation == "desc"){
      const { data } = getOrientatedData(props.allData, orientation);
      return (
        <DataPerItem pageAccent={props.pageAccent} data={data} />
      );
    }

    else if(orientation == "asc"){
      const { data } = getOrientatedData(props.allData, orientation);
      return (
        <DataPerItem pageAccent={props.pageAccent} data={data} />
      );
    }
  }

  useEffect( () => {
    const accordionWrapper = ref_wrapper.current;
    const sortChapterButton = ref_sortPerChapter.current;
    const sortDescButton = ref_sortButton.current;
    const sortAscButton = ref_sortAscButton.current;
    const unfoldButton = ref_unfoldButton.current;

    const setOrientationPerChapter = () => {
      setOrientation('perChapter');
      setState('Per Hoofdstuk');
    }

    const setOrientationDesc = () => {
      setOrientation('desc');
      setState('Aflopend (z-a)');
    }

    const setOrientationAsc = () => {
      setOrientation('asc');
      setState('Oplopend (a-z)');
    }

    const toggleAllAccordions = () => {
      const allDetails = accordionWrapper.querySelectorAll('[class*=dali-accordion]');
      allDetails.forEach(oneDetail => {
        oneDetail.toggleAttribute('open');
      });
    } 

    sortDescButton.addEventListener('click', setOrientationDesc);
    sortAscButton.addEventListener('click', setOrientationAsc);
    sortChapterButton.addEventListener('click', setOrientationPerChapter); 
    unfoldButton.addEventListener('click', toggleAllAccordions);

    return () => {
      sortDescButton.removeEventListener('click', setOrientationDesc);
      sortAscButton.removeEventListener('click', setOrientationAsc);
      sortChapterButton.removeEventListener('click', setOrientationPerChapter); 
      unfoldButton.removeEventListener('click', toggleAllAccordions);
    } 
  }, [orientation]);


  return(
    <section className={`dali-accordionWrapper-${props.pageAccent}`} ref={ref_wrapper}>
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
          {icons.iElement.doubleDownArrow} Uitklappen
        </button>
        {props.additionalButtons}
      </section>
      {dataOrientation()}
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
 * @param {string} accordionItemFeatures for when the accordionItem is used without a parent accordion. when giving a color from theme-colors in variables.scss the buttons in this element will have that color as focus, hover and active state's.
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