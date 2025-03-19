import { useState } from "react";

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    setFilter({ title, rating });
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 bg-gray-700 text-white rounded-lg mr-2"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-2 bg-gray-700 text-white rounded-lg mr-2"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
