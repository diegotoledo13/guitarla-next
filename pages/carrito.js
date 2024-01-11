import Layout from "../components/layout";
import style from "../styles/carrito.module.css";

export default function Carrito() {
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={style.contenido}>
          <div className={style.carrito}>
            <h2>Artículos</h2>
          </div>
          <aside className={style.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
