import React, { useRef, useState } from "react";
import { HeaderUserNav } from "../components/prefilled/headerUserNav";

export function Handboek() {
  const [pageAccent, setPageAccent] = useState('red');


  return(
    <HeaderUserNav title="handboek" navLeft={<a href="/#/" class="fa-solid fa-house-chimney header-buttons"></a>} pageAccent={pageAccent}/>

  );
}