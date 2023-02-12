// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../client";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Index = ({ recipe }) => {
  // How to get the cookingSteps style
  // Where you iterate over cookingSteps[number]
  console.log(recipe[0].cookingSteps[1].style);
  // How to get the cookingSteps text
  // Where you iterate over cookingSteps[number].text
  console.log(recipe[0].cookingSteps[1].children[0].text);

  return (
    <div>
      <h1>Welcome to a recipe!</h1>
    </div>
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
  "cookingSteps": cookingSteps[]
}
      `);
  return {
    props: {
      recipe,
    },
  };
}

export default Index;
