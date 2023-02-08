// frontend/pages/index.tsx
// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

import Link from "next/link";
import groq from "groq";
import client from "../client";
import Navigation from "@/components/navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Index = ({ posts }) => {
  return (
    <div>
      <Navigation />
      <h1>Welcome to a blog!</h1>
      {/* {console.log(posts)} */}
      {posts.length > 0 &&
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
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
