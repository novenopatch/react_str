import React from 'react';

const FruitForm = ({handleChange,handleSubmit,newFruit}) => {
    return (
        <div>
        <form  action="submit" onSubmit={handleSubmit}>
          <input
          className='form-control my-3'
            value={newFruit}
            type="text"
            placeholder="Add new fruit"
            onChange={handleChange}
          />
          <button type="submit" className='btn btn-primary btn-sm'>Add</button>
        </form>
      </div>
    );
};

export default FruitForm;