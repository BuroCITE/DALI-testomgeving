import React from 'react';

/**
 * header component with preset styles.
 * @param {string} headerFeatures expects a class attribute for the variants of the header. can choose from: all colors in theme-colors (this can be found in the variables.scss)
 * @param {*} navLeft nav items that should be on the left of the header. 
 * @param {*} title the title of the current webpage.
 * @param {*} navRight nav items that should be on the right of the header.
 * @returns a prestyled header element with skip navigation link, left navigation, h1 title and right naviagtion.
 */
export function Header(props) {
  return(
    <>
      <header className={`dali-header-${props.headerFeatures}`}>
        {/* invisible link is a link only visible by getting focus. this is for people who don't use mouses to easily skip the navigation and go to the main */}
        {/* <a className="invisible-link header-link"   href="#main">skip navigation</a> */}
        <nav>
          {props.navLeft}
        </nav>
        <h1>{props.title}</h1>
        <nav className="nav-right">
          {props.navRight}
        </nav>
      </header>
    </>
  );
}
Header.defaultProps = {
  headerFeatures: "red",
}