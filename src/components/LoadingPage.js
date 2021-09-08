import React from 'react';
import news from '../assets/news.jpg';
import '../Styles/Loading.css';

const LoadingPage = () => (
  <div>
    <img src={news} alt="news" className="news" />
  </div>
);

export default LoadingPage;
