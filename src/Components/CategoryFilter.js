// src/components/CategoryFilter.js
import React from 'react';

const categories = [
'business',
'entertainment',
'general',
'health',
'science',
'sports',
'technology',
];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
return (
    <div className="category-filter">
    {categories.map((category) => (
        <button
        key={category}
        className={category === selectedCategory ? 'selected' : ''}
        onClick={() => onSelectCategory(category)}
        >
        {category}
        </button>
    ))}
    </div>
);
};

export default CategoryFilter;
