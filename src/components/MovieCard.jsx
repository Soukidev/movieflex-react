import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 duration-300">
      {/* Movie Poster with Overlay */}
      <div className="relative h-96"> 
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent opacity-100 group-hover:opacity-300 transition-opacity duration-300"></div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>

        {/* Rating with Stars */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`text-yellow-400 ${index < movie.rating ? "text-yellow-400" : "text-gray-600"}`}>
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-400">({movie.rating}/5)</span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/movie/${movie.id}`}
          className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-500 text-center py-2 rounded-lg transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
