import React from "react";

const Filters = ({
  search,
  handleSearchChange,
  filterChoice,
  sortDropdown,
  handlefilterChoiceChange,
  handleSortDropdownChange,
}) => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
          <div className='card-body'>
            <form onChange={handlefilterChoiceChange}>
              <div className='form-group'>
                <label htmlFor='filter'>
                  Filter By &nbsp;
                  <select
                    defaultValue={filterChoice}
                    onChange={handlefilterChoiceChange}
                  >
                    <option value='name'>Name</option>
                    <option value='phone'>Phone Number</option>
                    <option value='email'>Email</option>
                  </select>
                </label>
              </div>
            </form>
            <input
              type='text'
              className='form-control'
              id='search'
              // name is how we identify what this input is called so we can find it later in other parts of the application
              name='search'
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card' style={{ margin: "2rem", borderRadius: "7px" }}>
          <div className='card-body'>
            <div className='form-group'>
              <label htmlFor='sort'>
                Sort by &nbsp;
                <select
                  value={sortDropdown}
                  onChange={handleSortDropdownChange}
                >
                  <option value='first.name'>First Name</option>
                  <option value='last.name'>Last Name</option>
                  <option value='email'>Email</option>
                  <option value='age'>Age</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
