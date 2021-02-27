import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import Filters from "../components/Filters.js/index.js";

function Employees() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterChoice, setfilterChoice] = useState("");
  const [sortDropdown, setSortDropdown] = useState("");
  // state = {
  //   users: [],
  //   search: "",
  // };

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (search) => {
    setSearch(search.target.value);
  };

  // dropdown filter simply gives us the name of what we Want to filter
  const handlefilterChoiceChange = (filterChoice) => {
    setfilterChoice(filterChoice.target.value);
    console.log(filterChoice);
  };
  // dropdown to set what we want to sort by
  const handleSortDropdownChange = (sortDropdown) => {
    setSortDropdown(sortDropdown.target.value);
    console.log(sortDropdown);
  };

  return (
    <div>
      {search}
      <Filters
        users={users}
        search={search}
        filterChoice={filterChoice}
        sortDropdown={sortDropdown}
        handleSearchChange={handleSearchChange}
        handleDropdownChange={handlefilterChoiceChange}
        handleSortDropdownChange={handleSortDropdownChange}
      />
      <EmployeeCard users={users} search={search} filterChoice={filterChoice} />
    </div>
  );
}

export default Employees;
