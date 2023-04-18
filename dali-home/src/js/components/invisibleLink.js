import React, { useEffect, useRef } from 'react';

/**
 * 
 * @param {string} invisibleLinkFeatures expects a class attribute for the variants of the invisible link. can choose from: left-slide-in, right-slide-in, top-slide-in, all colors in theme-colors (this can be found in the variables.scss) and an additional transparent color. color will default to transparent while effect will default to left-slide-in.
 * @param {string} targetId the id of the element where the button should link to or the id of a parent element. will default to the root element.
 * @param {string} linkText the text that will be visible inside the link. will default to 'skip content'.
 * @returns a invisible link that goes the element provided or the first focusable child of the parent element provided.
 */
export function InvisibleLink(props) {
  const ref_link = useRef(null)
  
  useEffect(() => {
    const link =ref_link.current;

    /**
     * Gets keyboard-focusable elements within a specified element
     * @param {HTMLElement}  parent element you want to check. defaults to document
     * @returns {Array} an array of all focusable elements.
     */
    function getFocusableElements (element = document) {
      return [
        ...element.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      ].filter(
        el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
      )
    }

    const onSkipToContent = (event) => {
      event.preventDefault();

      const target = document.getElementById(`${props.targetId}`);
      if(!target) return

      const focusable = getFocusableElements(target);
      if(focusable.length > 0){
        var nextInDom = focusable[0];
      }
      else{
        var nextInDom = target;
      }

      if(nextInDom instanceof HTMLElement){
        nextInDom.focus();
      }
    }

    link.addEventListener('click', onSkipToContent);
  }, []);

  return (
    <a
        ref={ref_link}
        href={`#${props.targetId}`}
        className={`dali-invisibleLink-${props.invisibleLinkFeatures} card-link`}>
      {props.linkText}
    </a>
  );
}
InvisibleLink.defaultProps = {
  targetId: 'root',
  linkText: 'skip content',
  invisibleLinkFeatures: 'transparent-left-slide-in'
}