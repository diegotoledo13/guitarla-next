import Layout from "../components/layout";
import Link from "next/link";

export default function Paginas404() {
  return (
    <Layout
      title={"Pagina no encontrada"}
      description="Pagina no encontrada, GuitarrasLA"
    >
      <main>
        <p className="error">Pagina no encontrada</p>
        <Link className={"error-enlace"} href="/">
          Volver al inicio
        </Link>
      </main>
    </Layout>
  );
}
