import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

export default function Post({ post }) {
  const { contenido, imagen, titulo, publishedAt } = post[0].attributes;
  return (
    <Layout title={titulo} description={contenido[0].children[0].text}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen blog ${titulo}`}
          width={1000}
          height={600}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          {contenido.map((parrafo, index) =>
            parrafo.children.map((child, childIndex) => (
              <p className={styles.texto} key={`${index}-${childIndex}`}>
                {child.text}
              </p>
            ))
          )}
          <Link className={styles.enlace} href={`/blog`}>
            Volver
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();
  return {
    props: {
      post,
    },
  };
}
