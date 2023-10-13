import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Huy",
    age: 21,
  };

  /*
   De render thi co ham render() cu phap JSX -> ham return 1 khoi code html, su dung js trong ham,...
   */

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnClickBtn = () => {
    alert("Thanks for your clicked me!");
  };

  render() {
    return (
      <>
        {/* su ky dieu cua state */}
        <div className="test">
          My name is
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          ! I'm {this.state.age} years old!
        </div>
        <div className="test1">Pham Dang {this.state.name}!</div>
        <div className="test2">
          {this.state.name}B2014836@student.ctu.edu.vn
        </div>
        <div className="test3">
          <button onClick={() => this.handleOnClickBtn()}>Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
