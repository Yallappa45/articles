// src/api/newsApi.js
import axios from 'axios';

const API_KEY = '16607d4443594f1aa540e05bc3d8700e'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const getNews = async (category = '', page = 1) => {
try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
        country: 'us',
        category,
        page,
        pageSize: 10, // Number of articles per page
        apiKey: '16607d4443594f1aa540e05bc3d8700e',
    },
    });
    return response.data;
} catch (error) {
    console.error("Error fetching news:", error);
    throw error;
}
};
