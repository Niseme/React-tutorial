import React, { createElement } from 'react';
import ReactDom from 'react-dom';


function Greeting() {
  return (
    <div>
      <Person />
      <Message />

    </div>
  );
}

const Person = () => <h2>John does</h2>
const Message = () => { return (<p>this is my message</p>) }

ReactDom.render(<Greeting />, document.getElementById('root'));

