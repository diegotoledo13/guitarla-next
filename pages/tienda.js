import Layout from "../components/layout";
import Guitarra from "../components/guitarra";

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <Layout
      title={"Tienda"}
      description="Tienda virtual, de guitarras, instrumentos, GuitarrasLA"
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        {guitarras.map((guitarra) => (
          <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
        ))}
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}
