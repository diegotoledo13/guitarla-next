import Image from "next/image";
import Link from "next/link";

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <div className="imagen">
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen blog ${titulo}`}
          width={600}
          height={400}
        />
      </div>
      <div>
        <h3>{titulo}</h3>

        {contenido.map((parrafo, index) =>
          parrafo.children.map((child, childIndex) => (
            <p key={`${index}-${childIndex}`}>{child.text}</p>
          ))
        )}

        <p>{publishedAt}</p>
        <Link href={`/blog/${url}`}>Leer más</Link>
      </div>
    </article>
  );
}
