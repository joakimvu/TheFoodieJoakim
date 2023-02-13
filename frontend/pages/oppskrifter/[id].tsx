// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../services/client";
import { useRouter } from "next/router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getRecipe } from "../../services/getRecipe";

import Image from "react-bootstrap/Image";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  const [recipe, setRecipe] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(recipe);

  // Trigges henting av data når komponenten blir laget
  useEffect(() => {
    const fetchRecipe = async () => {
      // Indikerer på at vi henter data
      setLoading(true);
      try {
        // Henter data
        const data = await getRecipe(id as String);
        // Lagrer data
        setRecipe(data);
      } catch (error: any) {
        // Lagrer feilmelding
        setError(error);
        console.log(error);
      } finally {
        // Loading resettes
        setLoading(false);
      }
    };
    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (loading) <p>Loading...</p>;
  if (error) <p>{error}</p>;

  //   console.log(recipe.ingredients);
  // console.log(recipe?.ingredients[0].ingredientName);
  return (
    <main className="container mt-5" style={{ maxWidth: "768px" }}>
      {recipe && recipe != undefined ? (
        <>
          <Image
            src={recipe?.imageUrl}
            alt={recipe?.title}
            style={{ width: "100%" }}
          />
          <div className="row">
            <div className="col-sm-6">
              <h4>{recipe?.country}</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="text-end">{recipe?.cookingTime}</h4>
            </div>
          </div>
          <div className="row">
            <p>Sist oppdatert: {recipe?.publishedAt}</p>
            <h1>{recipe?.title}</h1>
            <p>{recipe?.description}</p>
          </div>
        </>
      ) : (
        <p>Something Wrong Happend!</p>
      )}
    </main>
  );
};

export default Recipe;
