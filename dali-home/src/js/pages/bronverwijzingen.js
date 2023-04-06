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
const text = TaalbestandNL.home;


export function Bronverwijzingen() {
  const [pageAccent, setPageAccent] = useState('red');

  var { data } = GetData('library/alle-bronnen.json');
  var allBronnen = data;
  var { data } = GetData('library/bronnen-per-chapter.json');
  var bronnenPerChapter = data;
  
  if(!bronnenPerChapter || !allBronnen) {
    return(
      <LoadingScreen loadingScreenFeatures={`${pageAccent}-flipping-down-right-square`}
      title="loading..."/>
    );
  }

  return (
    <>
      <div className={`bronverwijzingen-contentbox-${pageAccent}`} aria-label="de bronverwijzingen webpagina">
        <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
        <HeaderUserNav title="Bronverwijzing" navLeft={<PopupGoHome pageAccent={pageAccent}/>} pageAccent={pageAccent} text={text} taalBestand={TaalbestandNL} icons={icons}/>
        <main className="resultaten-contentbox sidebar-adjecent">

          <WrappedAccordion chapterData={bronnenPerChapter} allData={allBronnen} pageAccent={`${pageAccent}`}>
            <Accordion 
                title="galaxy" 
                useBadge={true}
                accordionFeatures={`${pageAccent}-color-nest`}>
              <AccordionItem title="0.2 pluto">
                <IconButtonBox pageAccent={pageAccent}>
                  <button className="article-button">
                    <i class="fa-solid fa-download"></i>
                  </button>
                  <button className="article-button">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </IconButtonBox>
              </AccordionItem>
              <Accordion 
                  title="milky way"
                  useBadge={true}>
                <Accordion 
                    title="solar system"
                    useBadge={true}>
                  <Accordion title="planets"  useBadge={true}>
                    <AccordionBody>
                      <AccordionItem title="0.1 earth">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.2 pluto">
                        <IconButtonBox pageAccent={pageAccent}>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.3 saturnus">
                        <IconButtonBox pageAccent={pageAccent}>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.4 uranus">
                        <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.5 neptunus">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.6 jupiter">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.7 venus">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.8 mars">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.9 mercurius">
                      <IconButtonBox pageAccent={pageAccent}>
                        <button className="article-button">
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button className="article-button">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                      </IconButtonBox>
                      </AccordionItem>
                    </AccordionBody>
                  </Accordion>
                </Accordion>
              </Accordion>
            </Accordion>
          </WrappedAccordion>
        </main>
        {/* <Sidebar sidebarFeatures="40"/> */}
      </div>
    </>
  );
}
