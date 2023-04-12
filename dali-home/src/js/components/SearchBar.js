import React, { useEffect } from "react";


export function SearchBar(props) {
  
  useEffect(() => {

  },[]);

  return(
    <section className={`dali-searchBar-${props.searchBarFeatures}`}>
      <form>
        <input placeholder={`zoeken`}></input>
        <button hidden={!props.searchBarFeatures.includes('new-design')} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </section>
  )
}