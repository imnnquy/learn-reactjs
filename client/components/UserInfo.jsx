import React from 'react';
import Avatar from './Avatar.jsx';

export default class Comment extends React.Component {
  render() {
    let props = this.props;
    console.log(props);
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
}
