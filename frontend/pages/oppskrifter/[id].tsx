// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../services/client";
import { useRouter } from "next/router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getRecipe } from "../../services/getRecipe";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { type } from "os";

type Step = {
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
  }[];
  markDefs: any[];
  style: string;
};

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
    <main
      className="container-fluid mx-auto mt-5"
      style={{ maxWidth: "767px" }}
    >
      {recipe && recipe != undefined ? (
        <>
          <Image
            src={recipe?.imageUrl}
            alt={recipe?.title}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="row mt-2">
            <div className="col-sm-6">
              <h6>{recipe?.country}</h6>
            </div>
            <div className="col-sm-6">
              <h6 className="text-end">{recipe?.cookingTime}</h6>
            </div>
          </div>
          <div className="row">
            <h1>{recipe?.title}</h1>
            <p>
              Sist oppdatert:{" "}
              {recipe?.publishedAt
                ? new Date(recipe.publishedAt).toLocaleDateString("no-NO", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </p>
            <p>{recipe?.description}</p>
            {/* TODO: change portion to dynamic value */}
            {/* Antall porsjoner */}
            <div>
              <p>
                Antall porsjoner{" "}
                <span className="text-danger">(funksjon under arbeid)</span>
              </p>
              <InputGroup className="mb-3" style={{ width: "10rem" }}>
                <Button variant="primary">-</Button>
                <Form.Control
                  aria-label="Example text with two button addons"
                  // TODO: change this to dynamic value
                  value="40"
                  style={{ textAlign: "center" }}
                />
                <Button variant="primary">+</Button>
              </InputGroup>
            </div>
            {/* Ingredienser */}
            <div>
              <h2>Ingredienser</h2>
              <ul className="list-unstyled">
                {recipe?.ingredients?.map((ingredient: any, index: number) => (
                  <li key={index}>
                    <div className="row">
                      <div className="col-sm-1">
                        <p className="d-inline">{ingredient.quantity}</p>
                        <p className="d-inline">{ingredient.unitName}</p>
                      </div>
                      <div className="col-sm-8">
                        <p className="d-inline">{ingredient.ingredientName}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Fremgangsmåte */}
            <div>
              <h2>Fremgansmåte</h2>
              {recipe?.cookingSteps?.map((step: Step, index: number) => {
                console.log(step?.children[0]);
                const Tag: any = step?.style === "normal" ? "p" : step?.style;
                return <Tag key={index}>{step?.children[0]?.text}</Tag>;
              })}
            </div>
          </div>
        </>
      ) : (
        <p>Something Wrong Happend!</p>
      )}
    </main>
  );
};

export default Recipe;
