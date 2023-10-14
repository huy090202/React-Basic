import React from "react";

class ChildComponent extends React.Component {
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
    console.log(">>>Call props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    let { name, age } = this.props;
    return (
      <>
        <div>
          Child Component name: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildComponent;
