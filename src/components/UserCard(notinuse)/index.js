import React, { Component } from "react";
import API from "../../utils/API";
// import EmployeeCard from "../EmployeeCard";
import Filters from "../Filters.js/index.js";

class UserCard extends Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    this.createEmployees();
  }

  createEmployees = (query) => {
    API.getEmployees(query)
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  };

  // ----------------------TODO ------ our filter function----------------------------------------//
  // handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <div className='container'>
        <EmployeeCard users={this.state.users} />
      </div>
    );
  }
}

export default UserCard;

// <div>
//   <Filters handleInputChange />
//   {this.state.search}
//   {/* <EmployeeCard results={this.state.result} */}
//   {/* --------------------------How are these different?------------------------------------*/}

//   {/* ------------Above I pass this.state.results to the Child Component--------------------*/}

//   {/* ----------------Below, I map from the initial this.state.results----------------------*/}

//   {this.state.result.map((employee) => {
//     return (
//       <ul key={employee.dob.date}>
//         <li>
//           {employee.name.first} {employee.name.last}
//         </li>
//         <li>
//           <img alt='portrait' src={employee.picture.large} />
//         </li>
//         <li>
//           {employee.location.city} {employee.location.state}
//         </li>
//         <li>{employee.email}</li>
//       </ul>
//     );
//   })}
// </div>
