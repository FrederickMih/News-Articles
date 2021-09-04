import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomNewsContainer from './customNewsContainer';

const MoreArticles = () => {
  const article = useSelector((state) => state.article);
  const pattern = useSelector((state) => state.pattern);
  if (!pattern && article) {
    return (
      <div className="details-div">
        <Link
          to="/"
        >
          <span className="goback">
            <i className="fas fa-arrow-left" />
            {' '}
            Back
          </span>
        </Link>
        <img className="article-logo" src={article.logo_url} alt="article-logo" />
        <h3>{article.name}</h3>
        <hr />
        <h3>Common information:</h3>
        <ul>
          <li>
            Name
            {': '}
            {article.name}
          </li>
          <li>
            linK
            {': '}
            <a href={article.url}>Link</a>
          </li>

        </ul>
      </div>
    );
  }
  return (
    <CustomNewsContainer />
  );
};

export default MoreArticles;
