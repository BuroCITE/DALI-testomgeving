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