import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // Ham giup k load lai trang
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing requied params");
      return;
    }

    console.log(">>>Check data: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    // Sau khi submit thi reset input ve rong
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form action="/action_page.php">
          <label for="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <br />
          <label for="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponents;
