import React from "react";

const Filters = ({ handleInputChange }) => {
  return (
    <div className='card mb-5'>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='nameFilter'>Filter By Name</label>
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
