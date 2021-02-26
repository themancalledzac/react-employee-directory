import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import Filters from "../components/Filters.js/index.js";

function Employees() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  // state = {
  //   users: [],
  //   search: "",
  // };

  useEffect(() => {
    // ----TODO ---- stop auto-updating useEffect
    // if (!users) {
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
    // }
  }, []);

  // --------------TODO -------------- the search/filter portion
  const handleInputChange = (search) => {
    // getting the value and name of the input which triggered the change
    // const { name, value } = search.target;
    // setSearch(name.value);
    setSearch(search.target.value);
    // updating the input's state
  };

  return (
    <div>
      {search}
      <Filters handleInputChange={handleInputChange} />
      <EmployeeCard users={users} search={search} />
    </div>
  );
}

export default Employees;
