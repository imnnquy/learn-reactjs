import React from 'react';

export default class Avatar extends React.Component {
  render() {
    let props = this.props;
    console.log(props);
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
}