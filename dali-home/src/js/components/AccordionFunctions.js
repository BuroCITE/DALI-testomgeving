import React from 'react';
import PdfViewerComponent from '../externalComponents/pdfViewerComponent';
import { Accordion, AccordionButtonBox, AccordionItem } from './accordion';
import { Popup } from './popup';
import { IconButtonBox } from './prefilled/iconButtonBox';
import { Sidebar } from './sidebar';

export class DataPerItem extends React.Component {
  constructor(props){
    super(props);
  }

  buttonsToRender(item){
    if(item.webUrl != undefined){
      return(
        <a
            href={item.webUrl}
            target="_blank"
            className="article-button">
          <i class="fa-solid fa-eye"></i>
        </a>
      );
    }
    else if(item.fileName  != undefined){
      return(
        <>
          <a
              href={`library/pdf/bijlagen/${item.fileName}`}
              download
              className="article-button">
            <i class="fa-solid fa-download"></i>
          </a>
          <button onClick={() => {
            this.props.setPopupOpenState(true);
            this.props.changePdfViewerUrl(`library/pdf/bijlagen/${item.fileName}`)
            }}></button>
        </>
      );
    }
    else{
      return(
        <a className="article-button-disabled">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </a>
      );
    }
  }

  elementToRender(item){
    if(item.isAccessable){
      return(
        <AccordionItem
            key={item.id}
            title={item.description}
            accordionItemFeatures={this.props.pageAccent}>

          <IconButtonBox pageAccent={this.props.pageAccent}>
            {this.buttonsToRender(item)}
          </IconButtonBox>
        </AccordionItem>
      )
    }
    else{
      return(
        <AccordionItem
            key={item.id}
            title={item.description}>
          <IconButtonBox pageAccent={this.props.pageAccent}>
            <a className="article-button-disabled">
            <i class="fa-solid fa-triangle-exclamation"></i>
            </a>
          </IconButtonBox>
        </AccordionItem>
      ); 
  }
    
  }

  render() {
    return (
      this.props.data.map((item, key) => (
        this.elementToRender(item)
      ))
    )
  }
}


export class DataPerChapter extends React.Component {
  constructor(props){
    super(props);
  }

  elementToRender(item){
    if(item.items.length > 0){
      return (
        <Accordion
          useBadge={true}
          title={item.groepsNaam}
          accordionFeatures={this.props.accordionFeatures}
        >
          <DataPerItem
            data={item.items}
            changePdfViewerUrl={this.props.changePdfViewerUrl}
            setPopupOpenState={this.props.setPopupOpenState}
          />
        </Accordion>
      );
    }
  }

  render() {
    return (
      this.props.data.map((item, key) => (
        this.elementToRender(item)
      ))
    );
  }
}