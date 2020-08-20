import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Categories.css";
import YouTube from "react-youtube";
//import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";
const trailerbaseurl = "https://api.themoviedb.org/3/";

function Categories({ title, fetchUrls, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function getMovies() {
      try {
        const request = await instance.get(fetchUrls);
        //  console.log(request.data.results);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, [fetchUrls]);

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      async function getTrailers() {
        try {
          if (title === "Netflix Originals") {
            const request = await instance.get(
              `${trailerbaseurl}${"tv" || "tv"}/${
                movie.id
              }/videos?api_key=8eb191bf214db79c846e1e24a69a5d77`
            );
            console.log(
              `${trailerbaseurl}${"movie"}/${
                movie.id
              }/videos?api_key=8eb191bf214db79c846e1e24a69a5d77`
            );

            console.log(request.data.results[0]);
            setTrailerUrl(request.data.results[0]?.key);
            // setMovies(request.data.results);
          } else {
            const request = await instance.get(
              `${trailerbaseurl}${"movie"}/${
                movie.id
              }/videos?api_key=8eb191bf214db79c846e1e24a69a5d77`
            );
            console.log(
              `${trailerbaseurl}${"movie" || "tv"}/${
                movie.id
              }/videos?api_key=8eb191bf214db79c846e1e24a69a5d77`
            );

            console.log(request.data.results[0]);
            setTrailerUrl(request.data.results[0]?.key);
            // setMovies(request.data.results);
          }
        } catch (error) {
          console.error(error);
        }
      }
      getTrailers();
    }
    //   movieTrailer(`${movie?.name}` || "")
    //     .then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       console.log(url);
    //       setTrailerUrl(urlParams.get("v"));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };

  return (
    <div className="categories">
      <h3>{title}</h3>
      <div className="categories_posters">
        {movies.map((movie) => (
          <img
            className={`categories_poster ${
              isLarge && "categories_poster_large"
            }`}
            key={movie.id}
            src={`${baseURL}${
              isLarge ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.backdrop_path}
            onClick={() => {
              handleClick(movie);
            }}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl} // defaults -> null
          opts={options} // defaults -> {}
        />
      )}
    </div>
  );
}

export default Categories;
