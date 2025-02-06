import React from 'react';
import useNewsService from '../hooks/useNewsService';
import "../../news/components/News.css"

const News = () => {
  let category = "entertainment";
  const { news, isLoading, isError } = useNewsService(category);

  if (isLoading) {
    return <h3 className="loading-text">Loading...</h3>;
  }
  if (isError) {
    return <h3 className="error-text">Error fetching news. Please try again.</h3>;
  }

  return (
    <div className="container news-container ">
      <h2 className="section-title">Latest Entertainment News</h2>
      <div className="row">
        {news.map((n, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="card news-card shadow-sm">
              <img src={n.image} className="card-img-top" alt="News" />
              <div className="card-body">
                <h5 className="card-title">{n.source?.name || "Unknown Source"}</h5>
                <p className="card-text">{n.title}</p>
                <a href={n.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
