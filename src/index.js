import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = (
  <span>
    <h1>
      Good morning {new Date().toLocaleTimeString("en-US").split(/:| /)}
    </h1>
  </span>
);

function Someone() {
  const everyone = ['John', 'See', 'Na'];
  var anyone = everyone[Math.floor(Math.random() * everyone.length)];
  return <span>and {anyone}</span>;
}

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "first name",
      lname: "last name",
      age: 20
    }
  }

  changeName = () => {
    this.setState({
      fname: "new fname",
      lname: "new lname"
    })
  }

  render() {
    return (
      <div>
        <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
        <button
          type="button"
          onClick={this.changeName}
        >Change Name</button>
      </div>
    );
  }
}

ReactDOM.render(<Person name="firstname" />, document.getElementById('root'));