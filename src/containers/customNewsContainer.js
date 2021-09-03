import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomNews } from '../actions/newsActions';

const CustomNewsContainer = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState('');
  const [mostImportant, setMostImportant] = useState('');

  let newsArticles = useSelector((state) => state.articleReducer);
  const filterPattern = useSelector((state) => state.pattern);

  if (filterPattern && newsArticles) {
    newsArticles = newsArticles.filter((ar) => ar.name.toLowerCase().startsWith(filterPattern)
      || ar.category.toLowerCase().startsWith(filterPattern));
  }

  const dispatch = useDispatch();

  const getCustomNews = (source, mostImportant) => dispatch(fetchCustomNews(source, mostImportant));

  const getSources = () => {
    fetch('https://newsapi.org/v1/sources?')
      .then((scs) => {
        console.log(newsArticles.customNews);
        return scs.json();
      })
      .then((response) => {
        console.log(response);
        setSources(response.sources);
      });
  };

  useEffect(() => {
    getSources();
  }, []);

  const getNews = (e) => {
    console.log(source);
    e.preventDefault();
    if (source === '' || source === 'nothing') {
      console.log('There is no source selected');
    } else {
      getCustomNews(source, mostImportant);
      console.log(newsArticles.customNews);
    }
  };

  let news;
  if (newsArticles.customNews.length > 0) {
    news = (

      <div className="news">
        { newsArticles.customNews.map((nws) => (
          <div className="post" key={nws.title}>

            <img src={nws.urlToImage} alt={nws.title} />
            <h2>{nws.title}</h2>
            <p>{nws.description}</p>
            <a href={nws.url}>
              {' '}
              {nws.urlToImage}
            </a>
          </div>

        ))}
      </div>

    );
  } else {
    news = <p>Select a source and the most important news from the form</p>;
  }

  return (
    <>
      <section>
        <h2>Search</h2>

        <form onSubmit={getNews}>
          <div className="form-control">
            <h2>Source</h2>
            <select onChange={(e) => setSource(e.target.value)}>
              <option value="nothing">Select an option...</option>
              {
                                sources.map((source) => (
                                  <option key={source.id} value={source.id}>{source.name}</option>
                                ))
                            }
            </select>
            <h2>My Most Important News</h2>
            <select onChange={(e) => setMostImportant(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="top">Top</option>
            </select>
            <input type="submit" value="Search" />
          </div>
        </form>

        {news}

      </section>
    </>
  );
};

export default CustomNewsContainer;
