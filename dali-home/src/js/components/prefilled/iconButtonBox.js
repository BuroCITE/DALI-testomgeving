import React, { useEffect, useRef } from 'react'

export function IconButtonBox(props){
  const ref_buttonBox = useRef();

  // this function prevents empty input type's inside the button-box.
  // empty inputs could have impact on the way that the input is shown to the user.
  useEffect(() => {
    const buttonBox = ref_buttonBox.current;
    var allInputs = buttonBox.querySelectorAll('input');
    allInputs.forEach(input => {
      if(input.value != "") return
        input.value = " ";
    });
  });

  return(
    <nav
        ref={ref_buttonBox}
        className={`dali-icon-button-box-${props.pageAccent}`}>
      {props.children}
    </nav>
  );
}
IconButtonBox.defaultProps = {
  pageAccent: "red",
}