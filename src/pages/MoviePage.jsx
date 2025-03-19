import { useParams, Link } from "react-router-dom";
import moviesData from "../data/movies";

const MoviePage = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      {/* Back to Home Link */}
      <Link to="/" className="text-blue-400 hover:text-blue-500 transition-colors">
        &larr; Back to Home
      </Link>
      
      <div className="mt-10 max-w-6xl mx-auto">
        {/* Movie Title & Poster Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Poster */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="rounded-lg shadow-lg w-80 md:w-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Movie Details */}
          <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="text-lg text-gray-400 mb-4">{movie.description}</p>

            {/* Actors Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-blue-400">Main Actors</h3>
              <div className="flex space-x-6 mt-2">
                {movie.actors.map((actor, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg mb-2"
                    />
                    <p className="text-lg text-gray-300">{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Release Date Section */}
            {movie.releaseDate && (
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-400">Release Date</h3>
                <p className="text-lg text-gray-300">{movie.releaseDate}</p>
              </div>
            )}

            {/* Video Trailer */}
            <div className="flex justify-center md:justify-start mt-6">
              <iframe
                className="w-full md:w-96 h-64 rounded-lg shadow-lg"
                src={movie.trailerURL}
                title={`${movie.title} Trailer`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
