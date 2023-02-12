// frontend/pages/oppskrifter/index.tsx

import Link from "next/link";
import groq from "groq";
import client from "../../client";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Index = ({ recipe }) => {
  console.log(recipe[0]);

  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {/* {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )} */}
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
    description,
    "countryName": country->Country->title,
    "cookingTime": cookingTime->Time->time,
    "proteinName": protein[]->title,
    "cookingMethodName": cookingMethod[]->title,
    "mealTypeName": mealType[]->title,
    "seasonName": season[]->title,
    method
  }
    `);
  return {
    props: {
      recipe,
    },
  };
}

export default Index;
