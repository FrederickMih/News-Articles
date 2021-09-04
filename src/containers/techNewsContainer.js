import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechCrunch } from '../actions/newsActions';

const TechNews = () => {
  // ----- redux and dispatch the action
  const techSelector = useSelector((state) => state.fetchTechCrunch);
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
          {techSelector.techNews.map((x) => (
            <div className="post" key={x.title}>
              <img src={x.urlToImage} alt="Tech" />
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechNews;
