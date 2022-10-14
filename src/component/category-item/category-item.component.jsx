import './category-item.styles.scss';
import React from 'react';


// One prop is required, category
// Deconstruct category, using const {attribute1, attribute2} = category;

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    return (
        <div className="category-container">
            <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`}}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
      </div>

    );
    
};

export default CategoryItem;