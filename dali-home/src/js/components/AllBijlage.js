import React, { useEffect, useState } from 'react';
import { Accordion, AccordionButtonBox, AccordionItem, AccordionLoader } from './accordion';

export class AllBijlage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      this.props.data.map((item, key) => (
        <AccordionItem key={item.id} title={item.omschrijving}>
          <AccordionButtonBox>
            <a href={item.webUrl} target="_blank" className="article-button">
              <i class="fa-solid fa-eye"></i>
            </a>
          </AccordionButtonBox>
        </AccordionItem>
      ))
    )
  }
}

// good for getting data from one url
export function GetData(url) {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();

      setState(data);
    };

    //todo: remove time out after sprint is done.
    //? or add time out of 500ms for if data is loaded to fast. otherwise it will look to flashing
    setTimeout(function() {
      //your code here
      dataFetch();
     }, 750);
  }, [url]);

  return {data: state};
}

export function GetOrientation(data, orientation, changeOrientation = null){
  
    // orientation = (orientation === 'desc' ? 'asc' : 'desc');
    if(changeOrientation != null){changeOrientation(orientation)}

    const order = {
      desc: (a, b) => (a.omschrijving > b.omschrijving ? -1 : 1),
      asc: (a, b) => (a.omschrijving > b.omschrijving ? 1 : -1)
    }
    
    const sortData = (receivedData, orientation) => {
      receivedData.sort(order[orientation]);
      return receivedData;
    }

    var newData = sortData(data, orientation);

  return {data: newData};
}
//fetching multiple url's
// export const getAllData = () => {
//   const []
// }