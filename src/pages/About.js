import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className='card'
      style={{ margin: "2rem", marginTop: "5rem", borderRadius: "7px" }}
    >
      <div className='card-body'>
        <h1>Employee Directory</h1>
        <p>
          In this ficticious company, my boss has asked for an employee
          directory that allows him to search his employees by name, phone,
          email, or country, while also being able to sort by first name, last
          name, email, age, phone, or country.
        </p>
        <button>
          <Link to='/employees'>Your Employees</Link>
        </button>
      </div>
    </div>
    // button
  );
};

export default About;
