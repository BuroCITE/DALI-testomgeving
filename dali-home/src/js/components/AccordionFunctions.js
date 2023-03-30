import React from 'react';
import { Accordion, AccordionButtonBox, AccordionItem } from './accordion';

export class DataPerItem extends React.Component {
  constructor(props){
    super(props);
  }

  buttonsToRender(item){
    if(item.webUrl != undefined){
      return(
        <>
          <a href={item.webUrl} target="_blank" className="article-button">
            <i class="fa-solid fa-eye"></i>
          </a>
        </>
      );
    }
    else if(item.bestandsnaam  != undefined){
      console.log('works');
      return(
      <a href={`library/pdf/bijlagen/${item.bestandsnaam}`} download className="article-button">
        <i class="fa-solid fa-download"></i>
      </a>
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
    if(item.isAanwezig){
      return(
        <AccordionItem key={item.id} title={item.omschrijving} accordionItemFeatures={this.props.pageAccent}>
          <AccordionButtonBox>
            {this.buttonsToRender(item)}
          </AccordionButtonBox>
        </AccordionItem>
      )
    }
    else{
      return(
        <AccordionItem key={item.id} title={item.omschrijving}>
          <AccordionButtonBox>
            <a className="article-button-disabled">
            <i class="fa-solid fa-triangle-exclamation"></i>
            </a>
          </AccordionButtonBox>
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
      return(
        <Accordion useBadge={true} title={item.groepsNaam} accordionFeatures={this.props.accordionFeatures}>
          <DataPerItem data={item.items}/>
        </Accordion>
      )
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