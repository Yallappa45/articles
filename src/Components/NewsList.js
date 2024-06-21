// src/components/NewsList.js
import React from 'react';

const NewsList = ({ articles }) => {
return (
    <div className="news-list">
    {articles.map((article) => (
        <div key={article.url} className="news-item">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
        </a>
        </div>
    ))}
    </div>
);
};

export default NewsList;
