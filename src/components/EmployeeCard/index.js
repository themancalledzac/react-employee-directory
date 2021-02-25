import React from "react";

function EmployeeCard({ users }) {
  return (
    <div className='card' style={{ margin: "2rem" }}>
      <div className='card-body' style={{ display: "flex", flexWrap: "wrap" }}>
        {users
          // .filter((user) => {
          //   // return true or false: check if search is in the first or last name
          // })
          .map((user) => (
            <div
              className='card-body'
              style={{ flex: "flex", maxWidth: "25%" }}
            >
              <img
                alt='portrait'
                src={user.picture.large}
                style={{ maxWidth: "300px" }}
              />
              <h2 className='card-text'>
                {user.name.first} {user.name.last}
              </h2>
              <h3 className='card-text'>age: {user.dob.age}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EmployeeCard;
