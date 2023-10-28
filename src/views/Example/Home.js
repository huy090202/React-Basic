import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import Images from "../../assets/images/PHẠM ĐANG HUY.png";
import "./demo.scss";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   // Chuyen sang trang todo
    //   // Co thuoc tinh history.push ,... la nho HOC
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello world from HomePage with Huy</div>
        <div>
          <img className="img-test" src={Images} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>[x]</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

// HOC(higher order component): khi withRouter boc thang home => tao ra component moi co tat ca thuoc tinh cua withRouter + home
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
