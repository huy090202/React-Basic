import React from "react";
import ChildComponent from "./ChildComponents";
import AddComponents from "./AddComponents";

class MyComponent extends React.Component {
  state = {
    // name: "Huy",
    // age: 21,
    arrJobs: [
      { id: "abcJobs1", title: "Developer", salary: "500" },
      { id: "abcJobs2", title: "Tester", salary: "400" },
      { id: "abcJobs3", title: "Project manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log(">>>check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // prevState la state qua khu
    // this.state la state hien tai sau khi update
    console.log(
      ">>> run didupdate: ",
      "prevState: ",
      prevState,
      "current state: ",
      this.state
    );
  }

  // Noi de goi API
  componentDidMount() {
    console.log(">>> run component did mount");
  }

  /*
   De render thi co ham render() cu phap JSX -> ham return 1 khoi code html, su dung js trong ham,...
   */

  render() {
    console.log(">>>Call render: ", this.state);
    return (
      <>
        <AddComponents addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
