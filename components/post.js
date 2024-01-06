import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "@/utils/helpers";
import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen blog ${titulo}`}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        {contenido.map((parrafo, index) =>
          parrafo.children.map((child, childIndex) => (
            <p className={styles.resumen} key={`${index}-${childIndex}`}>
              {child.text}
            </p>
          ))
        )}
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer más
        </Link>
      </div>
    </article>
  );
}
