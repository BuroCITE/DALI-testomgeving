import React from 'react';

/**
 * @param {string} sidebarFeatures expects a class attribute for the variants of the Sidebar. can choose from: right;
 * @param {element} headerContent a header that sits on the top of the sidebar
 * @param {*} children all elements placed in between 2 Sidebar tags will be send as children of this element and are placed inside the Sidebar under the header
 * @param {element} footerContent a footer that sits on the bottom of the sidebar
 * @returns a black opage sidebar which will default to the left side.
 */
export class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <aside className={`inlog-shadow dali-sidebar-${this.props.sidebarFeatures}`}>
        <div className="inlog-sidebar">
          {this.props.headerContent}

          <section className='sidebar-main-content'>
            {this.props.children}
          </section>

          {this.props.footerContent}
        </div>
      </aside>
    );
  }
}

export function SidebarHeader(props) {
  return (
    <header>
      {props.children}
    </header>
  );
}

export function SidebarFooter(props) {
  return (
    <footer>
      {props.children}
    </footer>
  );
}