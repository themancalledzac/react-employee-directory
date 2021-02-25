import React from "react";

const Filters = (handleInputChange) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label for='nameFilter'>Filter By Name</label>
            <input
              type='text'
              className='form-control'
              id='nameFilter'
              // what about these two
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
