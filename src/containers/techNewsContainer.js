import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechCrunch } from '../actions/newsActions';

const TechNews = () => {
  const techSelector = useSelector((state) => state.articleReducer);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchTechCrunch());

  useEffect(() => {
    getTechNews();
  }, []);

  return (
    <>
      <section>
        <h2>Technology News</h2>
        <div className="news">
          {techSelector.techNews.map((tech) => (
            <div className="post" key={tech.title}>

              <h2>{tech.title}</h2>
              <p>{tech.description}</p>
              <a href={tech.url}><img src={tech.urlToImage} alt="Tech" /></a>
              <h2>{tech.content}</h2>
              <h3>{tech.publishedAt}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechNews;
