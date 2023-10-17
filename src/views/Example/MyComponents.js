import React from "react";
import ChildComponent from "./ChildComponents";

class MyComponent extends React.Component {
  state = {
    // name: "Huy",
    // age: 21,
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abcJobs1", title: "Developer", salary: "500" },
      { id: "abcJobs2", title: "Tester", salary: "400" },
      { id: "abcJobs3", title: "Project manager", salary: "1000" },
    ],
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
        <ChildComponent
          name={this.state.firstName}
          age={" 21"}
          address={"Ca mau"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
