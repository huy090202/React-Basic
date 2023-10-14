import React from "react";
import ChildComponent from "./ChildComponents";

class MyComponent extends React.Component {
  state = {
    // name: "Huy",
    // age: 21,
    firstName: "",
    lastName: "",
  };

  /*
   De render thi co ham render() cu phap JSX -> ham return 1 khoi code html, su dung js trong ham,...
   */

  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // Ham giup k load lai trang
    event.preventDefault();
    console.log(">>>Check data: ", this.state);
  };

  render() {
    console.log(">>>Call render: ", this.state);
    return (
      <>
        <form action="/action_page.php">
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent name={"Pham Dang Huy"} age={" 21"} />
      </>
    );
  }
}

export default MyComponent;
