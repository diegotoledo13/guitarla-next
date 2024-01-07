import Link from "next/link";
import Layout from "../components/layout";

export default function Home({ guitarras, posts }) {
  console.log(guitarras);
  console.log(posts);
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más"}
      ></Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`;
  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
  ]);
  const [{ data: guitarras }, { data: posts }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
  ]);

  return {
    props: {
      guitarras,
      posts,
    },
  };
}
