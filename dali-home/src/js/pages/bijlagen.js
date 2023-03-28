import React, { useEffect, useRef, useState } from "react";
import { WrappedAccordion, Accordion, AccordionBody, AccordionItem, AccordionButtonBox } from "../components/accordion";
import { Sidebar } from "../components/sidebar";
import { icons } from '../../library/res';
import { AllBijlage, DataPerChapter, GetData, GetOrientation, getOrientatedData } from "../components/AllBijlage";
import { LoadingScreen } from "../components/loadingScreen";
import { TaalbestandNL } from '../../library/res';
import { HeaderUserNav } from "../components/prefilled/headerUserNav";
import { PopupGoHome } from "../components/prefilled/popupGoHome";
const text = TaalbestandNL.home;



export function Bijlagen() {
  const [pageAccent, setPageAccent] = useState('purple');

  var { data } = GetData('library/alle-bijlagen.json');
  var allBijlagen = data;
  var { data } = GetData('library/bijlagen-per-chapter.json');
  var bijlagePerChapter = data;


  if(!bijlagePerChapter || !allBijlagen) {
    return(
      <LoadingScreen loadingScreenFeatures={`${pageAccent}-flipping-down-right-square`}
      title="loading..."/>
    );
  }

  return(
    <div className="bijlagen-contentbox" aria-label="de bijlagen webpagina">
      <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
      <HeaderUserNav title="bijlagen" navLeft={<PopupGoHome pageAccent={pageAccent}/>} pageAccent={pageAccent} text={text} taalBestand={TaalbestandNL} icons={icons}/>
      <main className="resultaten-contentbox sidebar-adjecent">

        <WrappedAccordion chapterData={bijlagePerChapter} allData={allBijlagen} pageAccent={`${pageAccent}`}>
        </WrappedAccordion>
      </main>
    </div>
  );
}