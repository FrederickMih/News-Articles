import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const handleClickGotoArticle = (article) => dispatch({ type: 'SHOW_ARTICLE', article });
  return (
    <div className="article">
      <h1>Hello Fred</h1>
      <span className="article-name">{article.content}</span>
      <img src={article.urlToImage} alt="img" className="article-logo" />
      <Link
        to={{
          pathname: '/article',
          state: {
            article,
          },
        }}
        key={article.name}
        onClick={() => handleClickGotoArticle(article)}
      >
        {article.content}
        {' '}
        {article.description}

      </Link>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
