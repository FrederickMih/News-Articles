import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article } = props;
  return (
    <div className="col-md-3 my-4">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={article.urlToImage} alt="article Cover" />
        <h5 className="text-light card-title">
          {article.author}
          -
          {article.publishedAt}
        </h5>
        <Link className="btn btn-warning mt-auto" to={`/article ${article.url}`}>
          article Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.instanceOf(Object),
};

Article.defaultProps = {
  article: [],
};

export default Article;
