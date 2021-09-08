import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchTechCrunch, loadingArticle } from '../actions/newsActions';
import LoadingPage from './LoadingPage';

const TechCrunch = (props) => {
  useEffect(() => {
    props.fetchTechCrunch(props.match.params.id);
    props.loadingArticle();
  }, []);

  const { article, loading } = props;

  const newsDetails = (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={article.urlToImage} className="thumnail" alt="urlToImage" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{article.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Published Date: </strong>
              {article.publishedAt}
            </li>
            <li className="list-group-item">
              <strong>Author: </strong>
              {article.author}
            </li>
            <li className="list-group-item">
              <strong>Description: </strong>
              {article.description}
            </li>
            <li className="list-group-item">
              <strong>News Content: </strong>
              {article.content}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 text-light">
          <div className="col-md-12">
            <hr />
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn mx-5 mt-2 btn-dark">
              ReadMore..
            </a>
            <Link to="/" rel="noopener noreferrer" className="btn mx-3 btn-default btn-dark">
              Go Back to Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  const content = loading ? <LoadingPage /> : newsDetails;
  return (
    <div>{content}</div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.articles.loading,
  article: state.articles.article,
});

TechCrunch.propTypes = {
  fetchTechCrunch: PropTypes.func.isRequired,
  loadingArticle: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  article: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
};

TechCrunch.defaultProps = {
  article: [],
  loading: false,
  match: 0,
};

export default connect(mapStateToProps, { fetchTechCrunch, loadingArticle })(TechCrunch);
