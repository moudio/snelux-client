import React from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { handleCategoryShow } from '../../actions/actions';
import Car from '../../pictures/car.jpg';

function Category({ category, handleCategories }) {
  return (
    <div className={`category ${category}`}>
      <h3 onclick={(category) => handleCategories(category)}>{category}</h3>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  handleCategories: (category) => {
    dispatch(handleCategoryShow(category));
  },
});
export default connect(null, mapDispatchToProps)(Category);
