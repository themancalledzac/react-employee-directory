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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          neque aspernatur tempore similique quam, sunt voluptatum, excepturi
          nisi ratione omnis totam nihil modi deserunt rem! Explicabo, minus
          libero sequi nostrum perferendis ipsa ad esse inventore odio, nobis
          possimus dolore doloribus sed dicta! Voluptates aperiam dolorem non
          delectus deleniti quia nisi?
        </p>
        <button>
          <Link to='/employees'>To Employees</Link>
        </button>
      </div>
    </div>
    // button
  );
};

export default About;
