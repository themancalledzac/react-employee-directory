function EmployeeCard({ search, users, filterChoice, sortChoice }) {
  const filteredUsers = users.filter((filterUser) => {
    if (!search) return filterUser;
    if (filterChoice === "name")
      return (
        filterUser.name.first.toLowerCase().includes(search.toLowerCase()) ||
        filterUser.name.last.toLowerCase().includes(search.toLowerCase())
      );
    if (filterChoice === "phone") return filterUser.phone.includes(search);
    if (filterChoice === "email") return filterUser.email.includes(search);
    if (filterChoice === "country")
      return filterUser.location.country
        .toLowerCase()
        .includes(search.toLowerCase());
  });

  const sortUsers = [...filteredUsers].sort((a, b) => {
    if (sortChoice === "name.first")
      return a.name.first.localeCompare(b.name.first);
    if (sortChoice === "name.last")
      return a.name.last.localeCompare(b.name.last);
    if (sortChoice === "email") return a.email.localeCompare(b.email);
    if (sortChoice === "country")
      return a.location.country.localeCompare(b.location.country);
    if (sortChoice === "age") return parseInt(a.dob.age) - parseInt(b.dob.age);
    if (sortChoice === "phone") return parseInt(a.phone) - parseInt(b.phone);
    else return filteredUsers;
  });

  return (
    <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
      <div className='cards-body' style={{ display: "flex", flexWrap: "wrap" }}>
        {sortUsers.map((user) => (
          <div key={user.phone} className='card-body'>
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
