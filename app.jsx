function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {firstName: 'Peter', lastName: 'Pan'};

const element = getGreeting(user);

function getGreeting(user) {
  if (user) {
    return <h1 style={{color:'#0F0'}}>Hello, {formatName(user)}!</h1>;
  }
  return <h1 style={{color:'#F00'}}>Hello, Stranger.</h1>;
};

ReactDOM.render(element, document.getElementById('root'));
