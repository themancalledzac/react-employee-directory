import React from "react";

const Filters = ({
  handleSearchChange,
  sortChoice,
  handlefilterChoiceChange,
  handlesortChoiceChange,
  handleFilter,
}) => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
          <div className='card-body'>
            <form className='search' onChange={handleFilter}>
              <div className='form-group'>
                <div className='form-group'>
                  <label htmlFor='sort'>
                    Sort by &nbsp;
                    <select
                      name='sortChoice'
                      id='sortChoice'
                      onChange={handlesortChoiceChange}
                      defaultValue={sortChoice}
                    >
                      <option value='name.first'>First Name</option>
                      <option value='name.last'>Last Name</option>
                      <option value='email'>Email</option>
                      <option value='age'>Age</option>
                      <option value='phone'>Phone</option>
                      <option value='country'>Country</option>
                    </select>
                  </label>
                </div>
                <label htmlFor='filter'>
                  Filter By &nbsp;
                  <select
                    name='filterChoice'
                    id='filterChoice'
                    onChange={handlefilterChoiceChange}
                    defaultValue={handleSearchChange}
                  >
                    <option value='name'>Name</option>
                    <option value='phone'>Phone Number</option>
                    <option value='email'>Email</option>
                    <option value='country'>Country</option>
                  </select>
                </label>
              </div>
              <input
                type='text'
                className='form-control'
                id='searchId'
                // name is how we identify what this input is called so we can find it later in other parts of the application
                name='searchId'
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
