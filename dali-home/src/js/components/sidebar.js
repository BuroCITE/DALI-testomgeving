import React, { createRef } from 'react';

/**
 * @param {string} sidebarFeatures expects a class attribute for the variants of the Sidebar. can choose from: right;
 * @param {string} sidebarAriaText REQUIRED (for accesibility) - the text that wil be loaded in the aria label of the sidebar.
 * @param {element} headerContent a header that sits on the top of the sidebar
 * @param {*} children all elements placed in between 2 Sidebar tags will be send as children of this element and are placed inside the Sidebar under the header
 * @param {element} footerContent a footer that sits on the bottom of the sidebar
 * @returns a black sidebar which will default to the left side with a width of 30% and height of 100%.
 */
export class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.ref_sidebar = React.createRef();
    this.ref_sidebarMenu = React.createRef();
  }

  componentDidMount(){
    const sidebarMenu = this.ref_sidebarMenu.current;
    const sidebar = this.ref_sidebar.current;
    console.log(sidebarMenu)
    const sidebarFeatures = this.props.sidebarFeatures;

    // the reason for first removing the class and then adding it is to prevent double adding a class. it will work without but could also bring problems.
    if(this.props.sidebarIsVisible == false){
      sidebar.classList.remove('closed');
      sidebar.classList.add('closed');
    }
    
    if(sidebarFeatures.includes('closeable')){
      sidebarMenu.style.display="block";
      
      // make button toggle the sidebar
      sidebarMenu.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
      });
    }

  }
  
  render() {
    return (
      <>
        <aside ref={this.ref_sidebar} aria-label={this.props.sidebarAriaText} className={`${this.props.sidebarClass} dali-sidebar-${this.props.sidebarFeatures}`}>
          <button ref={this.ref_sidebarMenu} aria-label="toggle sidebar" className="sidebar-toggle"><i className="fa fa-solid fa-bars"></i></button>
          <section className="inlog-sidebar">
            {this.props.headerContent}

            <section aria-label="sidebar main content" className='sidebar-main-content'>
              {this.props.children}
            </section>

            {this.props.footerContent}
          </section>
        </aside>
      </>
    );
  }
}

export function SidebarHeader(props) {
  return (
    <header aria-label="sidebar header">
      {props.children}
    </header>
  );
}

export function SidebarFooter(props) {
  return (
    <footer aria-label="sidebar footer">
      {props.children}
    </footer>
  );
}