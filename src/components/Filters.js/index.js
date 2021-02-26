import React from "react";

const Filters = ({ search, handleInputChange }) => {
  return (
    <div className='card mb-5' style={{ margin: "2rem", borderRadius: "7px" }}>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='nameFilter'>Filter By {search}</label>
            <input
              type='text'
              className='form-control'
              id='nameFilter'
              // name is how we identify what this input is called so we can find it later in other parts of the application
              name='search'
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
