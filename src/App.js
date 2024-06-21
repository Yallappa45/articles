// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import CategoryFilter from './Components/CategoryFilter';
import NewsList from './Components/NewsList';
import Pagination from './Components/Pagination';
import { getNews } from './api/newsApi';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews(category, currentPage);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>News App</h1>
      <CategoryFilter selectedCategory={category} onSelectCategory={handleCategoryChange} />
      <NewsList articles={articles} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
