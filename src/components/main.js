import React, { useState, useEffect } from 'react';
// redux hooks
// import the action
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomNews } from '../actions/newsActions';

const Main = () => {
  // news sources
  const [sources, setSources] = useState([]);
  // select source
  const [source, setSource] = useState('');
  // select relevance
  const [mostImportant, setMostImportant] = useState('');

  // ----- connect redux
  // here we get add the reducer that has the state we want
  const customNewsSelector = useSelector((state) => state.CustomSearch);
  // dispatch hook
  const dispatch = useDispatch();
  // action to dispatch
  const getCustomNews = (source, mostImportant) => dispatch(fetchCustomNews(source, mostImportant));

  // get the sources
  const getSources = () => {
    fetch('https://newsapi.org/v1/sources?')
      .then((scs) => {
        console.log(customNewsSelector.customNews);
        return scs.json();
      })
      .then((response) => {
        console.log(response);
        setSources(response.sources);
      });
  };

  // effect
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
      console.log(customNewsSelector.customNews);
    }
  };

  let news;
  if (customNewsSelector.customNews.length > 0) {
    news = (

      <div className="news">
        { customNewsSelector.customNews.map((nws) => (
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

export default Main;
