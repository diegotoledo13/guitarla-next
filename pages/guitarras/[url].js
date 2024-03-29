import { useState } from "react";
import Image from "next/image";
import styled from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Seleccione una cantidad");
      return;
    }
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styled.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`imagen guitarra${nombre}`}
          width={600}
          height={400}
        />
        <div className={styled.contenido}>
          <h3>{nombre}</h3>
          <p className={styled.descripcion}>
            {descripcion[0].children[0].text}
          </p>
          <p className={styled.precio}>${precio}</p>
          <form onSubmit={handleSubmit} className={styled.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              onChange={(e) => setCantidad(+e.target.value)}
              id="cantidad"
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
        <Link className={styled.enlace} href="/tienda">
          Volver al inicio
        </Link>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data: guitarras } = await respuesta.json();
  const paths = guitarras.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

//export async function getServerSideProps({ query: { url } }) {
//  const respuesta = await fetch(
//    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//  );
//  const { data: guitarra } = await respuesta.json();
//  return {
//    props: {
//      guitarra,
//    },
//  };
//}
