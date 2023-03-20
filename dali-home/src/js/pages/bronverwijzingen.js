import React, { useEffect, useRef, useState } from "react";
import { WrappedAccordion, Accordion, AccordionBody, AccordionItem, AccordionButtonBox } from "../components/accordion";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { icons } from '../../library/res';
import { AllBijlage, GetData, GetOrientation } from "../components/AllBijlage";
import { LoadingScreen } from "../components/loadingScreen";


export function Bronverwijzingen() {
  const sortBtn = useRef(null);
  const [orientation, setOrientation] = useState('desc');
  const [pageAccent, setPageAccent] = useState('green');

  var { data } = GetData('library/alle-bronnen.json');
  
  const changeOrientation = (newOrientation) => {
    setOrientation(newOrientation)
  }
  
  useEffect(() => {
    const sortButton = sortBtn.current; 
    
    if(!data) return

    GetOrientation(data, orientation, changeOrientation);

    const getNewData = () => {
      changeOrientation(orientation === 'desc' ? 'asc' : 'desc')
    }

    sortButton.addEventListener('click', getNewData);
    
    return () => {
      sortButton.removeEventListener('click', getNewData);
    }
  },[orientation, data]); 
  
  if(!data) {
    return(
      <LoadingScreen loadingScreenFeatures={`${pageAccent}flipping-down-right-square`}
      title="loading..."/>
    );
  }

  return (
    <>
      <div className="bronverwijzingen-contentbox" aria-label="de bronverwijzingen webpagina">
        <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
        <Header 
          headerFeatures={`${pageAccent}`}
          title="Bronverwijzing" 
          navLeft={<a href="/#/" class="fa-solid fa-house-chimney header-buttons"></a>}
        />
        <main className="resultaten-contentbox sidebar-adjecent">
          <WrappedAccordion sort={sortBtn}>
            <Accordion 
              title="alle bronnen"
              useBadge={true}
              accordionFeatures={`${pageAccent}`}
              accordionWrapperId="accordionWrapper"
              unfoldButtonId="unfoldButton">
                <AllBijlage data={data} />
            </Accordion>

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
