import React from "react";

function EmployeeCard({ users }) {
  return (
    <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
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
                style={{ maxWidth: "300px", borderRadius: "7px" }}
              />
              <h2 className='card-text'>
                {user.name.first} {user.name.last}
              </h2>
              <h5 className='card-text'>Age: {user.dob.age}</h5>
              <h5 className='card-text'>Phone: {user.phone}</h5>
              <h5 className='card-text'>{user.location.country}</h5>
              <h5 className='card-text'>
                <a href={user.email}>Email</a>
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EmployeeCard;
