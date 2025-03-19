import { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import moviesData from "../data/movies";
//import Header from "../components/Header";

const Home = () => {
  const [filter, setFilter] = useState({});
  const [movies, setMovies] = useState(moviesData);

  const filteredMovies = movies.filter((movie) => {
    return (
      (!filter.title || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (!filter.rating || movie.rating >= filter.rating)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">MovieFlex</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
