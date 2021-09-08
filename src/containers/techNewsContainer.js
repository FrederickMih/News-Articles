import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchTechCrunch } from '../actions/newsActions';
import Article from './Article';
import '../Styles/techNewsContainer.css';

const TechNews = () => {
  // const techSelector = useSelector((state) => state.articleReducer);
  const dispatch = useDispatch();
  // const getTechNews = () => dispatch(fetchTechCrunch());

  // useEffect(() => {
  //   getTechNews();
  // }, []);
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  let articles = useSelector((state) => state.customNews);
  const filterPattern = useSelector((state) => state.pattern);

  if (filterPattern || articles) {
    articles = articles.filter((ar) => ar.author.toLowerCase().startsWith(filterPattern)
      || ar.urlToImage.toLowerCase().startsWith(filterPattern));
  }

  // console.log(getTechNews);
  return (
    <>
      {/* <section>
        <h2>Technology News</h2>
        <div className="news">
          {articles.map((tech) => (
            <div className="post" key={tech.title}>

              <h2>{tech.author}</h2>
              <img src={tech.urlToImage} alt="Tech" />

            </div>
          ))}
        </div>
      </section> */}

      {articles ? articles.map((article) => (
        <Article
          key={article.author}
          article={article}
        />

      )) : 'Please wait'}
    </>
  );
};

export default TechNews;
