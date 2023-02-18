// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../services/client";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import FilterRecipes from "@/components/FilterRecipes";
import { Card } from "react-bootstrap";

const Index = ({ recipes }: any) => {
  // How to get the cookingSteps style
  // Where you iterate over cookingSteps[number]
  //   console.log(recipe[0].cookingSteps[1].style);
  // How to get the cookingSteps text
  // Where you iterate over cookingSteps[number].text
  //   console.log(recipe[0].cookingSteps[1].children[0].text);

  console.log(recipes);
  return (
    <main className="container mt-5" style={{ maxWidth: "768px" }}>
      <FilterRecipes />
      {recipes?.map((recipe, index): any => (
        <Card key={index} className="shadow p-3 mb-5 bg-white rounded">
          <Link
            href={`/oppskrifter/${recipe.slug.current}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Image
              src={recipe?.imageUrl}
              alt={recipe?.title}
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="row">
              <div className="col-sm-6">
                <h6>{recipe?.country}</h6>
              </div>
              <div className="col-sm-6">
                <h6 className="text-end">{recipe?.cookingTime}</h6>
              </div>
            </div>
            <div className="row">
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
              <h1>{recipe?.title}</h1>
            </div>
          </Link>
        </Card>
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const recipes = await client.fetch(groq`
    *[_type == "recipe"]{
      title,
      slug,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      "description": description[0].children[0].text,
      "country": country.Country->title,
      "cookingTime": cookingTime.Time->cookingTime,
      "protein": protein[]->title,
      "cookingMethod": cookingMethod[]->cookingMethod,
      "mealType": mealType[]->title,
      "season": season[]->title,
      "cookingSteps": cookingSteps[],
      "ingredients":   ingredients[] {
        "ingredientName": ingredientName->title,
        quantity,
        "unitName": unit->title,
      }
    }`);

  return {
    props: {
      recipes,
    },
  };
}

export default Index;
