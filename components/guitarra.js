import Image from "next/image";
import Link from "next/link";
import styled from "../styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className={styled.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen guitarra${nombre}`}
        width={600}
        height={400}
      />
      <div className={styled.contenido}>
        <h3>{nombre}</h3>
        <p className={styled.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styled.precio}>${precio}</p>
        <Link className={styled.enlace} href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
