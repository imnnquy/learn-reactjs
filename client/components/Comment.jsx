import React from 'react';
import UserInfo from './UserInfo.jsx';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    console.log(props);
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {(props.date)}
        </div>
      </div>
    );
  }
}
