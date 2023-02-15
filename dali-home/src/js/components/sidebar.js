import React from 'react';

export class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <aside id={this.props.id} className="inlog-shadow">
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