import React, { useRef, useState } from "react";
import { HeaderUserNav } from "../components/prefilled/headerUserNav";
import { PopupGoHome } from "../components/prefilled/popupGoHome";

export function Handboek() {
  const [pageAccent, setPageAccent] = useState('red');


  return(
    <HeaderUserNav
      title="handboek"
      navLeft={<PopupGoHome pageAccent={pageAccent}/>}
      pageAccent={pageAccent}
    />

  );
}