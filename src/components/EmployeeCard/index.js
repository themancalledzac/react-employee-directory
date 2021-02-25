import React from "react";

function EmployeeCard({ users }) {
  return (
    <div className='card'>
      {users.map((user) => (
        <div className='card-body'>
          <img alt='portrait' src={user.picture.large} />
          <p className='card-text'>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCard;
