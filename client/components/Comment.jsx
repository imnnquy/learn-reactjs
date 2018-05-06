import React from 'react';
import UserInfo from './UserInfo.jsx';
import Time from './Time.jsx';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          <Time />
        </div>
      </div>
    );
  }
}
