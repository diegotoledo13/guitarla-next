import Image from "next/image";
import styled from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Producto({ guitarra }) {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
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
        </div>
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
