import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import CustomNewsContainer from './customNewsContainer';
import TechNews from './techNewsContainer';

const DetailedArticle = () => {
  const article = useSelector((state) => state.article);
  const pattern = useSelector((state) => state.pattern);

  if (!pattern && article) {
    return (
      <div className="details-div">
        <Link to="/">
          {' '}
          Details
        </Link>
        <img className="article-logo" src={article.urlToImage} alt="article-logo" />
        <h3>{article.author}</h3>
        <hr />
        <h3>
          techInfo
        </h3>
        <ul>
          <li>
            Author
            {': '}
            {article.author}
          </li>
          <li>
            Description
            {': '}
            {article.descriptipn}
          </li>
          <li>
            Date
            {': '}
            {article.publishAt}
          </li>
          <li>
            Content
            {': '}
            {article.content}
          </li>

        </ul>

      </div>
    );
  }
  return (
    <TechNews />
  //  <CustomNewsContainer />
  );
};

export default DetailedArticle;
