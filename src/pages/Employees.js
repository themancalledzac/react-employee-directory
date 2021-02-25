import React from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";

class Employees extends React.Component {
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

  handleInputChange = (event) => {
    // getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // updating the input's state
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <EmployeeCard users={this.state.users} />
      </div>
    );
  }
}

export default Employees;
