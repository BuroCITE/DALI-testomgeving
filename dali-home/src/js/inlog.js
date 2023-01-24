import React from 'react';

export class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>
      <main>
        <img src="https://random.imagecdn.app/1700/850"/>
        <div class="inlog-shadow">
          <div class="inlog-sidebar">
            <img src="https://random.imagecdn.app/200/200"/>
            <h1>DALI</h1>
          </div>
        </div>
      </main>
    </>
    );
  }
}