import React from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { handleCategoryShow } from '../../actions/actions';
import Car from '../../pictures/car.jpg';
import { Link } from 'react-router-dom';

function Category({ category, handleCategories }) {
  function handleCategoriesFunc(e) {
    const cat = e.target.textContent;
    handleCategories(cat);
  }
  return (
    <div className={`category ${category}`}>
      <Link to="/categories">
        <h3 onClick={(e) => handleCategoriesFunc(e)}>{category}</h3>
      </Link>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  handleCategories: (category) => dispatch(handleCategoryShow(category)),
});
export default connect(null, mapDispatchToProps)(Category);
