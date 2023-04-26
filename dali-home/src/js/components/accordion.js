import React, { createElement, useEffect, useRef, useState } from "react";
import { icons } from '../../library/res';
import { DataPerItem, DataPerChapter } from "./accordionFunctions";
import {getOrientatedData} from "../functions/dataFunctions"
import { Dropdown } from "./dropdown";
import { InvisibleLink } from "./invisibleLink";
import { Popup } from "./popup";
import PdfViewerComponent from "../externalComponents/pdfViewerComponent";

/**
 * 
 * @param {boolean} useBadge when true will provide a badge with the amount of items inside represented.
 * @param {string} accordionFeatures 
 * @param {string} title
 */
export function Accordion(props){
    const ref_badge = useRef();
    const ref_details = useRef(null);

  const checkInvisibleLinkRequired = () => {
    // const details = this.ref_details.current;
    // var allLinks = details.querySelectorAll('a');
    // const nextAccordion = details.nextSibling;
    //? the above code connot be used at the moment because of a lack of insight.

    var allLinks = 0
    if(props.children.props != undefined){
      allLinks = props.children.props.data;
    }
    
    // 3 has been chosen because it will take 4 clicks with 3 elements without skiplink, and 2 clicks with skiplink. so its a number chosen for the best afficiantie but also no unnessary addons.
    if(allLinks.length >= 3){
      return (
        <InvisibleLink
            // target={nextAccordion}
            invisibleLinkFeatures="gray-3-right-slide-in"
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
      <details
          className={`dali-accordion-${props.accordionFeatures}`}
          ref={ref_details}
          data-has-badge={props.useBadge}>

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

// /**
//  * 
//  * @param {string} pageAccent
//  * @param {array} chapterData
//  * @param {array} allData
//  * @param {*} additionalButtons
//  * @returns 
//  */
export function WrappedAccordion(props){
  const ref_wrapper = useRef();
  const ref_sortButton = useRef(null);
  const ref_sortAscButton = useRef(null);
  const ref_sortPerChapter = useRef(null);
  const ref_unfoldButton = useRef();
  const [orientation, setOrientation] = useState('perChapter');
  const [state, setState] = useState('Per Hoofdstuk');
  const [pdfUrl, setPdfUrl] = useState(null);
  const [PopupOpenState, setPopupOpenState] = useState(false);
  ;


  const dataOrientation = () => {
    if(orientation == "perChapter"){
      return (
        <DataPerChapter
          accordionFeatures={`${props.pageAccent}`}
          data={props.chapterData}
          changePdfViewerUrl={setPdfUrl}
          setPopupOpenState={setPopupOpenState}
        />
      );
    }

    else if(orientation == "desc"){
      const { data } = getOrientatedData(props.allData, orientation);
      return (
        <DataPerItem
          pageAccent={props.pageAccent}
          data={data}
          changePdfViewerUrl={setPdfUrl}
          setPopupOpenState={setPopupOpenState}
        />
      );
    }

    else if(orientation == "asc"){
      const { data } = getOrientatedData(props.allData, orientation);
      return (
        <DataPerItem
          pageAccent={props.pageAccent}
          data={data}
          changePdfViewerUrl={setPdfUrl}
          setPopupOpenState={setPopupOpenState}
        />
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
  }, [orientation, pdfUrl]);

  return (
    <section
      className={`dali-accordionWrapper-${props.pageAccent}`}
      ref={ref_wrapper}
    >
      <section className="bronverwijzingen-buttonbox wrapper-buttonbox">
        <Dropdown
          dropdownClass="accordion-dropdown-sort"
          dropdownFeatures={props.pageAccent}
          buttonIcon={state}
          dropdownIcon={icons.iElement.downArrow}
        >
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
        &nbsp;{" "}
        {/* //todo: this &nbsp; should be handled via css. // ? temporary fix */}
        <button ref={ref_unfoldButton}>
          {icons.iElement.doubleDownArrow} Uitklappen
        </button>
        {props.additionalButtons}
      </section>

      <Popup
        showModalButtonClass="dali-modal-accent"
        showModalButtonContents={icons.iElement.eye}
        modalHeaderTitle={pdfUrl}
        modalFeatures={`${props.pageAccent}`}
        modalBodyClass="ondersteuning-popup-body"
        isModalOpen={PopupOpenState}
        setPopupOpenState={setPopupOpenState}
        useShowModalButton={false}
      >
        <PdfViewerComponent
          document={pdfUrl}
          pdfViewerClass=""
          pdfViewerFeatures=""
        />
      </Popup>
      {dataOrientation()}
      {props.children}
    </section>
  );
}

/**
 * 
 * @param {string} pageAccent
 * @param {array} chapterData
 * @param {array} allData
 * @param {*} additionalButtons
 * @returns 
 */
// export class WrappedAccordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orientation: "perChapter",
//       state: "Per Hoofdstuk",
//       pdfUrl: null,
//       isPdfAvailable: "not changed",
//     };
//     this.ref_wrapper = React.createRef();
//     this.ref_sortButton = React.createRef(null);
//     this.ref_sortAscButton = React.createRef(null);
//     this.ref_sortPerChapter = React.createRef(null);
//     this.ref_unfoldButton = React.createRef();
//     this.setAvialable = this.setAvialable.bind(this);
//     this.PdfPopup = this.PdfPopup.bind(this);
//     this.setData = this.setData.bind(this);
//     this.dataOrientation = this.dataOrientation.bind(this);
//   }

//   PdfPopup(url) {
//     if (url != null) {
//       console.log(url)
//       return (
//         <Popup
//           showModalButtonClass="dali-modal-accent"
//           showModalButtonContents={icons.iElement.eye}
//           modalHeaderTitle="functions"
//           modalFeatures={`${this.props.pageAccent}`}
//           modalBodyClass="ondersteuning-popup-body"
//           isModalOpen={this.state.isPdfAvailable}
//           setAvailable={this.setAvialable}
//         >
//           <PdfViewerComponent
//             document={`${url}`}
//             pdfViewerClass=""
//             pdfViewerFeatures=""
//           />
//         </Popup>
//       );
//     } else {
//       return (
//         <Popup
//           showModalButtonClass="dali-modal-accent"
//           showModalButtonContents={icons.iElement.eye}
//           modalHeaderTitle="functions"
//           modalFeatures={`${this.props.pageAccent}`}
//           modalBodyClass="ondersteuning-popup-body"
//           isModalOpen={this.state.isPdfAvailable}
//           setAvailable={this.setAvialable}
//         >
//           <h3>no pdf available</h3>
//           <p>{url}</p>
//         </Popup>
//       );
//     }
//   }

//   setData(url) {
//     console.log(url);
//     this.setState({pdfUrl: url});
//     console.log(this.state.pdfUrl);
//   }

//   setAvialable(data) {
//     console.log(data);
//     this.setState({ isPdfAvailable: data });
//     console.log(this.state.isPdfAvailable);
//   }

//   dataOrientation() {
//     if (this.state.orientation == "perChapter") {
//       return (
//         <DataPerChapter
//           accordionFeatures={`${this.props.pageAccent}`}
//           data={this.props.chapterData}
//           changePdfViewerUrl={this.setData}
//           setIsPdfAvailable={this.setAvialable}
//         />
//       );
//     } else if (this.state.orientation == "desc") {
//       const { data } = getOrientatedData(this.props.allData, this.state.orientation);
//       return (
//         <DataPerItem
//           pageAccent={this.props.pageAccent}
//           data={data}
//           changePdfViewerUrl={this.setData}
//           setIsPdfAvailable={this.setAvialable}
//         />
//       );
//     } else if (this.state.orientation == "asc") {
//       const { data } = getOrientatedData(this.props.allData, this.state.orientation);
//       return (
//         <DataPerItem
//           pageAccent={this.props.pageAccent}
//           data={data}
//           changePdfViewerUrl={this.setData}
//           setIsPdfAvailable={this.setAvialable}
//         />
//       );
//     }
//   }

//   componentDidMount() {
//     const accordionWrapper = this.ref_wrapper.current;
//     const sortChapterButton = this.ref_sortPerChapter.current;
//     const sortDescButton = this.ref_sortButton.current;
//     const sortAscButton = this.ref_sortAscButton.current;
//     const unfoldButton = this.ref_unfoldButton.current;

//     const setOrientationPerChapter = () => {
//       setState({ orientation: "perChapter", state: "Per Hoofdstuk" });
//     };

//     const setOrientationDesc = () => {
//       setState({ orientation: "desc", state: "Aflopend (z-a)" });
//     };

//     const setOrientationAsc = () => {
//       setState({ orientation: "asc", state: "Oplopend (a-z)" });
//     };

//     const toggleAllAccordions = () => {
//       const allDetails = accordionWrapper.querySelectorAll(
//         "[class*=dali-accordion]"
//       );
//       allDetails.forEach((oneDetail) => {
//         oneDetail.toggleAttribute("open");
//       });
//     };

//     sortDescButton.addEventListener("click", setOrientationDesc);
//     sortAscButton.addEventListener("click", setOrientationAsc);
//     sortChapterButton.addEventListener("click", setOrientationPerChapter);
//     unfoldButton.addEventListener("click", toggleAllAccordions);

//     return () => {
//       sortDescButton.removeEventListener("click", setOrientationDesc);
//       sortAscButton.removeEventListener("click", setOrientationAsc);
//       sortChapterButton.removeEventListener("click", setOrientationPerChapter);
//       unfoldButton.removeEventListener("click", toggleAllAccordions);
//     };
//   }

//   render() {
//     return (
//       <section
//         className={`dali-accordionWrapper-${this.props.pageAccent}`}
//         ref={this.ref_wrapper}
//       >
//         <section className="bronverwijzingen-buttonbox wrapper-buttonbox">
//           <Dropdown
//             dropdownClass="accordion-dropdown-sort"
//             dropdownFeatures={this.props.pageAccent}
//             buttonIcon={this.state.state}
//           >
//             <button
//               className="dali-dropdown-button"
//               ref={this.ref_sortPerChapter}
//             >
//               {icons.iElement.list} Per Hoofdstuk
//             </button>

//             <button
//               className="dali-dropdown-button"
//               ref={this.ref_sortAscButton}
//             >
//               {icons.iElement.downArrowShortWide} Oplopend (a-z)
//             </button>

//             <button className="dali-dropdown-button" ref={this.ref_sortButton}>
//               {icons.iElement.upArrowShortWide} Aflopend (z-a)
//             </button>
//           </Dropdown>
//           &nbsp;{" "}
//           {/* //todo: this &nbsp; should be handled via css. // ? temporary fix */}
//           <button ref={this.ref_unfoldButton}>
//             {icons.iElement.doubleDownArrow} Uitklappen
//           </button>
//           {this.props.additionalButtons}
//         </section>

//         {this.PdfPopup(this.state.pdfUrl)}
//         {this.dataOrientation()}
//         {this.props.children}
//       </section>
//     );
//   }
// }

  
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