import React from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import Filters from "../components/Filters.js";

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
        {this.state.search}
        <Filters handleInputChange={this.handleInputChange} />
        <EmployeeCard users={this.state.users} search={this.state.search} />
      </div>
    );
  }
}

export default Employees;
