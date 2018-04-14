import React from 'react';
import Greeting from './Greeting.jsx';
import Time from './Time.jsx';

export default class App extends React.Component {
  render() {
    return (<div>
      <Greeting/>
      <Time/>
    </div>);
  }
}
