import client from "./client";
import groq from "groq";

export const getRecipe = async (id: String) => {
  const pid = "mandu";
  const data = await client.fetch(groq`
    *[_type == "recipe" && slug.current == "${id}"]{
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
  return data[0];
};
