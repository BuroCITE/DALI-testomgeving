import React, { useRef } from "react";
import { Accordion, AccordionBody, AccordionItem, AccordionButtonBox } from "../components/accordion";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export function Bronverwijzingen() {

  return (
    <>

      <div className="bronverwijzingen-contentbox" aria-label="de bronverwijzingen webpagina">
        <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false}/>
        <Header 
          title="Bronverwijzing" 
          navLeft={<a href="/#/" class="fa-solid fa-house-chimney header-buttons"></a>}
        />
        <main id="accordionWrapper" className="resultaten-contentbox sidebar-adjecent">
          <section className="bronverwijzingen-buttonbox">
            <button id="unfoldButton"><i class="fa-solid fa-angles-down"></i> uitklappen</button>
          </section>
          <Accordion 
            title="0.1 hello worlds"
            useBadge={true}
            accordionFeatures="turquoise"
            accordionWrapperId="accordionWrapper"
            unfoldButtonId="unfoldButton"
          >
            <AccordionBody>
              <AccordionItem title="0.1 earth">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.2 pluto">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.3 saturnus">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.4 uranus">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.5 neptunus">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.6 jupiter">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.7 venus">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.8 mars">
                <AccordionButtonBox/>
              </AccordionItem>
              <AccordionItem title="0.9 mercurius">
                <AccordionButtonBox/>
              </AccordionItem>
            </AccordionBody>
          </Accordion>

          <Accordion 
            title="galaxy" 
            useBadge={true}
            accordionFeatures="red-color-nest"
            >
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
              useBadge={true}
              >
              <Accordion 
              title="solar system"
              useBadge={true}
              >
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
        </main>
        {/* <Sidebar sidebarFeatures="40"/> */}
      </div>
    </>
  );
}