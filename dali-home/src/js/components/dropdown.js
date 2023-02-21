import React, { useEffect, useState, useRef } from 'react';
/**
 * 
 * @param {string} buttonClass a class that you can assign to the dropdown button. expects a string
 * @param {element} buttonIcon the icon you want to use in the dropdown button. expects an element.
 * @param {*} children all elements placed in between 2 dropdown tags will be send as children of this element and are placed inside the dropdown.
 * @returns a fully functional dropdown.
 */
export function Dropdown(props) {
  // useState and useRef are react functies that can be used in functional components. for an explanation, google is our friend.
  const [expanded, setExpanded] = useState('false');
  const ref_dib = useRef(null);

  useEffect(() => {
    const dropdownBtn = ref_dib.current;

    // this function will change the attribute {aria-expanded} to true or false depending on the current value.
    dropdownBtn.addEventListener('click', (event) => {
      setExpanded(dropdownBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')
    })
  },[]);

  return (
    // we use ref here bacause if we use id this component wouldn't be reusable in the same webpage because of 2 or more simular id's. but with ref we wont have this because it connects the event to the current ref holder and not all ref holders.
    <section class="dropdown">
      <button ref={ref_dib} aria-expanded={expanded} class={`dropdown-button ${props.buttonClass}`}>{props.buttonIcon}</button>

      <article aria-labelledby="dropdown-item-button" class="dropdown-menu">
        {/* when placing more then 1 element it is recommended to wrap it in a section first. */}
        {props.children}
      </article>
    </section>
  );
}