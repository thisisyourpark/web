import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return <div>Hello world!</div>
  }
});

ReactDOM.render(<App />, document.getElementById('main'));
