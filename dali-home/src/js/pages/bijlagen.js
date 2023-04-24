import React, { useState } from "react";
import { WrappedAccordion } from "../components/accordion";
import { Sidebar } from "../components/sidebar";
import { icons } from '../../library/res';
import { GetData } from "../functions/dataFunctions"
import { LoadingScreen } from "../components/loadingScreen";
import { TaalbestandNL } from '../../library/res';
import { HeaderUserNav } from "../components/prefilled/headerUserNav";
import { PopupGoHome } from "../components/prefilled/popupGoHome";
import { SearchBar } from "../components/searchBar";

const text = TaalbestandNL.home;



export function Bijlagen() {
  const [pageAccent, setPageAccent] = useState("red");

  // var { data } = GetData(
  //   "https://brcacerv3571g01.burocite-nl.local:7158/api/GetAllAttachments"
  // );
  var { data } = GetData('library/alle-bijlagen.json');
  var allBijlagen = data;
  // var { data } = GetData("https://brcacerv3571g01.burocite-nl.local:7158/api/GetAllAttachmentsPerChapter");
  var { data } = GetData("library/bijlagen-per-chapter.json");
  var bijlagePerChapter = data;

  if (!bijlagePerChapter || !allBijlagen) {
    return (
      <LoadingScreen
        loadingScreenFeatures={`${pageAccent}-${TaalbestandNL.loadingScreen.loadingAnimation}`}
        title={TaalbestandNL.loadingScreen.loadingText}
      />
    );
  }

  return (
    <div
      className={`bijlagen-contentbox-${pageAccent}`}
      aria-label={text.pageAriaLabel}
    >
      <Sidebar sidebarFeatures="gray-1-closeable" sidebarIsVisible={false} />
      <HeaderUserNav
        title={text.heading.title}
        navLeft={<PopupGoHome pageAccent={pageAccent} />}
        pageAccent={pageAccent}
        text={text}
        taalBestand={TaalbestandNL}
        icons={icons}
      />

      <main className="resultaten-contentbox sidebar-adjecent">
        <SearchBar searchBarFeatures="red-new-design" />

        <WrappedAccordion
          chapterData={bijlagePerChapter}
          allData={allBijlagen}
          pageAccent={`${pageAccent}`}
        />
      </main>
    </div>
  );
}