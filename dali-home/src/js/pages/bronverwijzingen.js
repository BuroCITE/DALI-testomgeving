import React, { useState } from "react";
import { WrappedAccordion, Accordion, AccordionBody, AccordionItem, AccordionButtonBox } from "../components/accordion";
import { Sidebar } from "../components/sidebar";
import { icons } from '../../library/res';
import { GetData } from "../functions/dataFunctions"
import { LoadingScreen } from "../components/loadingScreen";
import { TaalbestandNL } from '../../library/res';
import { HeaderUserNav } from "../components/prefilled/headerUserNav";
import { PopupGoHome } from "../components/prefilled/popupGoHome";
import { IconButtonBox } from "../components/prefilled/iconButtonBox";
import { SearchBar } from "../components/searchBar";
const text = TaalbestandNL.bronverwijzingen;


export function Bronverwijzingen() {
  const [pageAccent, setPageAccent] = useState('red');

  var { data } = GetData('library/alle-bronnen.json');
  var allBronnen = data;
  var { data } = GetData('library/bronnen-per-chapter.json');
  var bronnenPerChapter = data;
  
  if(!bronnenPerChapter || !allBronnen) {
    return(
      <LoadingScreen loadingScreenFeatures={`${pageAccent}-${TaalbestandNL.loadingScreen.loadingAnimation}`}
      title={TaalbestandNL.loadingScreen.loadingText}/>
    );
  }

  return (
    <>
      <div
          className={`bronverwijzingen-contentbox-${pageAccent}`}
          aria-label={text.pageAriaLabel}>

        <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
        <HeaderUserNav
          title={text.heading.title}
          navLeft={<PopupGoHome pageAccent={pageAccent}/>}
          pageAccent={pageAccent}
          text={TaalbestandNL.home}
          taalBestand={TaalbestandNL}
          icons={icons}
        />

        <main className="resultaten-contentbox sidebar-adjecent">
          <SearchBar searchBarFeatures="red-new-design"/>
          
          <WrappedAccordion 
              chapterData={bronnenPerChapter} 
              allData={allBronnen} 
              pageAccent={`${pageAccent}`}>
          </WrappedAccordion>

        </main>
      </div>
    </>
  );
}
