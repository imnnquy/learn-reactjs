import React from 'react';
import Greeting from './Greeting.jsx';
import Welcome from './Welcome.jsx';
import Comment from './Comment.jsx';

export default class App extends React.Component {
  render() {
    let author = {
      name: "Eric",
      avatarUrl: "https://res.cloudinary.com/teepublic/image/private/s--iFTlnGfY--/t_Preview/b_rgb:0195c3,c_limit,f_jpg,h_630,q_90,w_630/v1473697308/production/designs/677653_1.jpg"
    }
    return (
      <div>
        <Greeting />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Comment author={author} />
      </div>);
  }
}
