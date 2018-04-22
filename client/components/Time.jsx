import React from 'react';

export default class Time extends React.Component {

  render() {
    return <h2>It is {new Date().toLocaleTimeString()}.</h2>;
  }
}
