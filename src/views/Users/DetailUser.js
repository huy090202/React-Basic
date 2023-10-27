import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    users: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);

      this.setState({
        users: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  // Quay lai trang users
  handleBackButton = () => {
    this.props.history.push("/users");
  };

  render() {
    let { users } = this.state;
    let isEmptyObject = Object.keys(users).length === 0;
    return (
      <>
        <div>
          Hello world from detail user with id: {this.props.match.params.id}
        </div>
        {isEmptyObject === false && (
          <>
            <div>
              Users's name: {users.first_name} - {users.last_name}
            </div>
            <div>Users's email: {users.email}</div>
            <div>
              <img src={users.avatar} />
            </div>
            <div>
              <button onClick={() => this.handleBackButton()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
