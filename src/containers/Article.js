import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const handleClickGotoarticle = (article) => dispatch({ type: 'PRESENT_ARTICLE', article });
  return (
    <div className="article">
      <span className="article-rank">{article.author}</span>
      <img src={article.logo_url} alt="logo" className="cur-logo" />
      <Link
        to={{
          pathname: '/article',
          state: {
            article,
          },
        }}
        key={article.name}
        onClick={() => handleClickGotoarticle(article)}
      >
        {article.name}
        {' '}
        {article.symbol}

      </Link>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo_url: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
