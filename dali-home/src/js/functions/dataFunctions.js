import React, { useEffect, useState } from 'react';

export function getOrientatedData(data, orientation){
  const order = {
    desc: (a, b) => (a.omschrijving > b.omschrijving ? -1 : 1),
    asc: (a, b) => (a.omschrijving > b.omschrijving ? 1 : -1)
  }
  
  var newData = data.sort(order[orientation]);

  return {data: newData};
}

export function GetData(url) {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();

      setState(data);
    };

    // add time out of 750ms for if data is loaded to fast. otherwise it will look to flashing
    setTimeout(function() {
      dataFetch();
     }, 750);
  }, [url]);

  return {data: state};
}