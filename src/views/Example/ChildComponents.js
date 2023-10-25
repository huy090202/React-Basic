import React from "react";
import "./demo.scss";

//  Class Component
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    // let name = this.props.name;
    // let age = this.props.age;

    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>>check conditional: ", check);

    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {/* Bac buoc dung map, khong dung for or while */}
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $ <></>{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="btn-show"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// Function Component (chi dung khi va chi khi co thang hook)
// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {/* Bac buoc dung map, khong dung for or while */}
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
