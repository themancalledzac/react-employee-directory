import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import Filters from "../components/Filters.js/index.js";
import "./employees.css";

function Employees() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterChoice, setfilterChoice] = useState("name");
  const [sortChoice, setSortChoice] = useState("name.first");
  // const [error, setError] = useState("");

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        if (res.data.length === 0) throw new Error("No results found.");
        if (res.data.status === "error") throw new Error(res.data.message);
        const sorted = [...res.data.results].sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
        setUsers(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (searchId) => {
    setSearch(searchId.target.value);
  };

  // dropdown filter simply gives us the name of what we Want to filter
  const handlefilterChoiceChange = (filterChoice) => {
    setfilterChoice(filterChoice.target.value);
  };
  // dropdown to set what we want to sort by
  const handlesortChoiceChange = (e) => {
    setSortChoice(e.target.value);
  };

  return (
    <div>
      <Filters
        users={users}
        search={search}
        filterChoice={filterChoice}
        sortChoice={sortChoice}
        // for OPTION #02
        // handleFilter={handleFilter}
        handlefilterChoiceChange={handlefilterChoiceChange}
        handlesortChoiceChange={handlesortChoiceChange}
        handleSearchChange={handleSearchChange}
      />
      <EmployeeCard
        users={users}
        search={search}
        sortChoice={sortChoice}
        filterChoice={filterChoice}
      />
    </div>
  );
}

export default Employees;
