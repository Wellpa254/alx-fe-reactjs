// src/components/RecipeCard.jsx
import { Link } from "react-router-dom";

export default function RecipeCard({ id, title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-transform">
      <Link to={`/recipe/${id}`}>
        {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
}

