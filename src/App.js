import React from "react";
import "./App.css";
import requests from "./requests";
import Categories from "./Categories";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Categories
        title="Netflix Originals"
        fetchUrls={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Categories title="Top Rated" fetchUrls={requests.fetchTopRated} />
      <Categories title="Trending" fetchUrls={requests.fetchTrending} />
      <Categories
        title="Action Movies"
        fetchUrls={requests.fetchActionMovies}
      />
      <Categories
        title="Comedy Movies"
        fetchUrls={requests.fetchComedyMovies}
      />
      <Categories
        title="Horror Movies"
        fetchUrls={requests.fetchHorrorMovies}
      />
      <Categories
        title="Romance Movies"
        fetchUrls={requests.fetchRomanceMovies}
      />
      <Categories
        title="Documentaries"
        fetchUrls={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
