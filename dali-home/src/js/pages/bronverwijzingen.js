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


export function Bronverwijzingen() {
  const [pageAccent, setPageAccent] = useState('green');

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
      <div className="bronverwijzingen-contentbox" aria-label="de bronverwijzingen webpagina">
        <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
        <HeaderUserNav title="Bronverwijzing" navLeft={<PopupGoHome pageAccent={pageAccent}/>} pageAccent={pageAccent} text={text} taalBestand={TaalbestandNL} icons={icons}/>
        <main className="resultaten-contentbox sidebar-adjecent">

          <WrappedAccordion chapterData={bronnenPerChapter} allData={allBronnen} pageAccent={`${pageAccent}`}>
            <Accordion 
                title="galaxy" 
                useBadge={true}
                accordionFeatures={`${pageAccent}-color-nest`}>
              <AccordionItem title="0.2 pluto">
                <AccordionButtonBox>
                  <button className="article-button">
                    <i class="fa-solid fa-download"></i>
                  </button>
                  <button className="article-button">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </AccordionButtonBox>
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
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.2 pluto">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.3 saturnus">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.4 uranus">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.5 neptunus">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.6 jupiter">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.7 venus">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.8 mars">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
                      </AccordionItem>
                      <AccordionItem title="0.9 mercurius">
                        <AccordionButtonBox>
                          <button className="article-button">
                            <i class="fa-solid fa-download"></i>
                          </button>
                          <button className="article-button">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </AccordionButtonBox>
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
