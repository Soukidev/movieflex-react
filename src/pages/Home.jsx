import { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import moviesData from "../data/movies";
import HeroSection from "../components/HeroSection";

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
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">MovieFlex</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#movies" className="hover:text-gray-400">Movies</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      <br></br>
      <h1 className="text-4xl font-bold text-center mb-6">Select your movie</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
