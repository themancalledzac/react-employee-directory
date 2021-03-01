// import React, { useState } from "react";

// import { useEffect } from "react";

function EmployeeCard({ search, users, filterChoice, sortChoice }) {
  // -----------------------------------------------------------------//
  //                                                                  //
  //                          OPTION #01                              //
  //                       CURRENT BEST OPTION                        //
  //                                                                  //
  // -----------------------------------------------------------------//
  const filteredUsers = users.filter((filterUser) => {
    if (!search) return filterUser;
    if (filterChoice === "name")
      return (
        filterUser.name.first.toLowerCase().includes(search.toLowerCase()) ||
        filterUser.name.last.toLowerCase().includes(search.toLowerCase())
      );
    if (filterChoice === "phone") return filterUser.phone.includes(search);
    if (filterChoice === "email") return filterUser.email.includes(search);
  });

  return (
    <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
      <h1>
        {filterChoice} hello {sortChoice} {search}
      </h1>
      <div className='card-body' style={{ display: "flex", flexWrap: "wrap" }}>
        {filterChoice}

        {filteredUsers.map((user) => (
          <div
            key={user.phone}
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
