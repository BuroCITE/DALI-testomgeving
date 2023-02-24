import React, { createRef } from 'react';

/**
 * @param {string} sidebarFeatures expects a class attribute for the variants of the Sidebar. can choose from: right;
 * @param {element} headerContent a header that sits on the top of the sidebar
 * @param {*} children all elements placed in between 2 Sidebar tags will be send as children of this element and are placed inside the Sidebar under the header
 * @param {element} footerContent a footer that sits on the bottom of the sidebar
 * @returns a black sidebar which will default to the left side with a width of 30% and height of 100%.
 */
export class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarVisible: this.props.sidebarVisible,
      initialWidth: this.props.sidebarVisible,
      open: false,
    };
    this.ref_sidebar = React.createRef();
    this.ref_sidebarMenu = React.createRef();
  }

  componentDidMount(){
    const sidebarMenu = this.ref_sidebarMenu.current;
    const sidebar = this.ref_sidebar.current;
    console.log(sidebarMenu)

    sidebarMenu.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    console.log(this.state.open)
  }
  
  render() {
    return (
      <>
        <aside ref={this.ref_sidebar} className={`${this.props.sidebarClass} dali-sidebar-${this.props.sidebarFeatures}`}>
          <button ref={this.ref_sidebarMenu} data-open={this.state.open} className="sidebar-toggle"><i className="fa fa-solid fa-bars"></i></button>
          <div className="inlog-sidebar">
            {this.props.headerContent}

            <section className='sidebar-main-content'>
              {this.props.children}
            </section>

            {this.props.footerContent}
          </div>
        </aside>
      </>
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