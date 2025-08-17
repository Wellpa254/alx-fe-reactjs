import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipes");
        return res.json();
      })
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        if (!selectedRecipe) {
          setError("Recipe not found");
        }
        setRecipe(selectedRecipe);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading recipe:", err);
        setError("Error loading recipe");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-cent
