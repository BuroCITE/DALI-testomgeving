import React, { useState } from "react";
import { icons } from '../../library/res';
import { TaalbestandNL } from '../../library/res';
import { HeaderUserNav } from "../components/prefilled/headerUserNav";
import { PopupGoHome } from "../components/prefilled/popupGoHome";
import { GetData } from "../functions/dataFunctions";
import { LoadingScreen } from "../components/loadingScreen";
import { WrappedAccordion } from "../components/accordion";
const text = TaalbestandNL.pve;

export function Pve(){
  const [pageAccent, setPageAccent] = useState('red');

  var { data } = GetData('library/alle-bronnen.json');
  var allBronnen = data;
  var { data } = GetData('library/bronnen-per-chapter.json');
  var bronnenPerChapter = data;
  
    
  if(!bronnenPerChapter || !allBronnen) {
    return(
      <LoadingScreen
        loadingScreenFeatures={`${pageAccent}-${TaalbestandNL.loadingScreen.loadingAnimation}`}
        title={TaalbestandNL.loadingScreen.loadingText}
      />
    );
  }

  else{
    return (
      <>
        <div className="pve" aria-label={text.pageAriaLabel}>
          <HeaderUserNav
            title={text.heading.title}
            navLeft={<PopupGoHome
            pageAccent={pageAccent}/>}
            pageAccent={pageAccent}
            text={TaalbestandNL.home}
            taalBestand={TaalbestandNL}
            icons={icons}
          />

          <main>
            <section>
              <header>
                <button>handboek raadplegen</button>
                <button>eis informatie</button>
              </header>

              <WrappedAccordion 
                chapterData={bronnenPerChapter} 
                allData={allBronnen} 
                pageAccent={`red`}>
              </WrappedAccordion>
            </section>

            <section>
              <header>
                <button>acties</button>
                <button>eis informatie</button>
              </header>

              <WrappedAccordion 
                chapterData={bronnenPerChapter} 
                allData={allBronnen} 
                pageAccent={`turquoise`}>
              </WrappedAccordion>
            </section>
          </main>

        </div>
      </>
    );
  }
}