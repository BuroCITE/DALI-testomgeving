import React from "react";
import { Accordion, AccordionBody, AccordionItem, AccordionButtonBox } from "../components/accordion";
import { Header } from "../components/header";

export function Bronverwijzingen() {

  return (
    <>
      <Header title="Bronverwijzing"/>
      <main className="bronverwijzingen-contentbox">
        <Accordion 
          title="0.1 hello worlds"
          useBadge={true}
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

        <Accordion title="galaxy" useBadge={true}>
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
          <Accordion title="milky way">
            <Accordion title="solar system">
              <Accordion title="planets">
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
    </>
  );
}