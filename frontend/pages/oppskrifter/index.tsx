// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../services/client";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";

const Index = ({ recipe }: any) => {
  recipe = recipe[0];
  // How to get the cookingSteps style
  // Where you iterate over cookingSteps[number]
  //   console.log(recipe[0].cookingSteps[1].style);
  // How to get the cookingSteps text
  // Where you iterate over cookingSteps[number].text
  //   console.log(recipe[0].cookingSteps[1].children[0].text);

  console.log(recipe.ingredients);
  // console.log(recipe?.ingredients[0].ingredientName);
  return (
    <main className="container mt-5" style={{ maxWidth: "768px" }}>
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
    </main>
  );
};

export async function getStaticProps() {
  const recipe = await client.fetch(groq`
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
  }
      `);
  return {
    props: {
      recipe,
    },
  };
}

export default Index;
