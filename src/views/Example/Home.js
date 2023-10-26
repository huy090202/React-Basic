import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   // Chuyen sang trang todo
    //   // Co thuoc tinh history.push ,... la nho HOC
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  render() {
    return <div>Hello world from HomePage with Huy</div>;
  }
}

// HOC(higher order component): khi withRouter boc thang home => tao ra component moi co tat ca thuoc tinh cua withRouter + home
// export default withRouter(Home);
export default Color(Home);
