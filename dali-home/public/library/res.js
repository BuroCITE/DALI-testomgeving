export const TaalbestandNL = {
  login: {
    sidebarAriaText: "login screen",
    formAriaText: "login form",
    userNameInput: {
      errorMessage: "Vul een geldige gebruikersnaam in.",
      label: "gebruikersnaam",
      iconAriaText: "icoon van een gebruiker",
    },
    passwordInput: {
      errorMessage: "wachtwoord is verkeerd.",
      label: "wachtwoord",
      iconAriaText: "icoon van een slot",
    },
    submitButtonText: "Aanmelden",
    forgotPasswordButtonText: "Wachtwoord vergeten?",
    mailButtonText: "Mail naar Dali-Helpdesk",
  },
  home: {
    heading:{
      title: "DALI - toepassingen",
    },
    userProfile: {
      userRole: {
        publisher: "uitgever",
        admin: "applicatiebeheerder",
      },
      userSettings: {
        buttonText: " gebruikers instellingen",
      },
      logout: {
        buttonText: " log uit",
      }
    },
    ondersteuningPopup: {
      showPopupButtonAriaText: "ondersteuning",
      showPopupButtonText: "?",
      popupAriaText: "ondersteunings popup",
      popupheaderTitle: "help",
      userManuals :{
        title: "gebruikershandleidingen",
        liorManual: {
          title: "gebruikshandleiding handboek",
        },
        pveManual: {
          title: "gebruikshandleiding projecten",
        }
      }
    },
    liorManualPopup: {
      popupheaderTitle: "welkom",
      downloadLink: "%PUBLIC_URL%/huisstijl.docx",
      downloadLink: "huisstijl.docx",
      pdf :"huisstijl.pdf",
      // ? should this be here or should this be seperated
    },
    pveManualPopup: {
      popupheaderTitle: "welkom",
      downloadLink: "%PUBLIC_URL%/huisstijl.docx",
      downloadLink: "huisstijl.docx",
      pdf :"huisstijl.pdf",
      // ? should this be here or should this be seperated
    },
    main: {
      skipCardLink: "skip cards (there is nothing after cards)",
      cards: {
        lior: {
          title: "handboek",
          description: "handboek Openbare Ruimte",
          notice: "Volgende publicatie zomer 2023",
          ariaText: "handboek openbare ruimte",
        },
        adviceFromMaps: {
          title: "raadplegen via kaart",
          description: "radplegen van het handboek via kaartweergave",
          notice: "",
          ariaText: "raadplegen via kaart",
        },
        pve: {
          title: "programma van eisen",
          description: "",
          notice: "",
          ariaText: "programma van eisen",
        },
        Appendix: {
          title: "bijlagen",
          description: "raadplegen van bijlagen",
          notice: "",
          ariaText: "raadplegen van bijlagen",
        },
        sourceReferences: {
          title: "bronverwijzingen",
          description: "raadplegen van bronverwijzingen",
          notice: "",
          ariaText: "raadplegen van online kaarten",
        },
        externalMaps: {
          title: "externe kaarten",
          description: "raadplegen van online kaarten",
          notice: "",
          ariaText: "raadplegen van online kaarten",
        },
        accountsAndRights: {
          title: "accounts en rechten",
          description: "gebruiksadministratie",
          notice: "",
          ariaText: "gebruikers administratie",
        },
        support: {
          title: "ondersteuning",
          description: "stel vragen of geef wensen door aan de helpdesk van DALI",
          notice: "",
          ariaText: "ondersteuning",
        },
      }
    },
  },
  buroCite: {
    productName: "Dali",
    productVersion: " V5 ",
    productInviroment: "Demo",
    productFullVersion: "Versie: 5.0.0.0",
    logo: {
      caption: "Het logo van Dali",
      whiteSM: <img aria-label="Het logo van dali" src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>
    },
    slogan: "de oplossing voor de buitenruimtemanagement",
    contactInfo: {
      startYear: "2002 - Buro CITE",
      address: "Visserlaan 18 2288ER Rijswijk",
      country: "Nederland",
      website: {
        text: "www.dali.-app.nl",
        link: "https://demo.dali-app.nl/#dashboard",
      }
    }
  }
}

export const icons = {
  iClass: {
    home: "fa-solid fa-house-chimney",
    downArrow: "fa-solid fa-angle-down",
    doubleDownArrow: "fa-solid fa-angles-down",
    sort: "fa-solid fa-bars-sort",
    settings: "fa-solid fa-gear",
    logout: "fa-solid fa-right-drom-bracket",
    roundUser: "fa-solid fa-circle-user",
    eye: "fa-solid fa-eye",
    book: "fa-solid fa-book",
    location: "fa-solid fa-location-dot",
    copy: "fa-solid fa-copy",
    paperclip: "fa-solid fa-paperclip",
    link: "fa-solid fa-link",
    map: "fa-solid fa-map",
    users: "fa-solid fa-users",
    roundQuestion: "fa-solid fa-circle-question",
    download: "fa-solid fa-download",
    lock: "fa fa-lock fa",
    envelope: "fa fa-envelope fa",
  },
  iElement: {
    home: <i class="fa-solid fa-house-chimney"></i>,
    downArrow: <i class="fa-solid fa-angle-down"></i>,
    doubleDownArrow: <i class="fa-solid fa-angles-down"></i>,
    downArrowShortWide: <i class="fa-solid fa-arrow-down-short-wide"></i>,
    settings: <i aria-hidden="true" class="fa-solid fa-gear"></i>,
    logout: <i aria-hidden="true" class="fa-solid fa-right-from-bracket"></i>,
    roundUser:<i aria-label="gebruikers icoon" class="fa-solid fa-circle-user">
    </i>,
    eye: <i class="fa-solid fa-eye"></i>,
    book: <i class="fa-solid fa-book"></i>,
    location: <i class="fa-solid fa-location-dot"></i>,
    copy: <i class="fa-solid fa-copy"></i>,
    paperclip: <i class="fa-solid fa-paperclip"></i>,
    link: <i class="fa-solid fa-link"></i>,
    map: <i class="fa-solid fa-map"></i>,
    users: <i class="fa-solid fa-users"></i>,
    roundQuestion: <i class="fa-solid fa-circle-question"></i>,
    download: <i class="fa-solid fa-download"></i>,
    lock: <i class="fa fa-lock fa"></i>,
    envelope: <i aria-label="icoon van een brief" className="fa fa-envelope fa"></i>,
  },
  svg: {
    
  }
}