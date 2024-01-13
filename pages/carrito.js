import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import style from "../styles/carrito.module.css";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = carrito.reduce(
      (acc, producto) => acc + producto.cantidad * producto.precio,
      0
    );
    setTotal(total);
  }, [carrito]);
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={style.contenido}>
          <div className={style.carrito}>
            <h2>Artículos</h2>
            {carrito.length === 0 ? (
              <p>No hay artículos</p>
            ) : (
              carrito.map((producto) => (
                <div key={producto.id} className={style.producto}>
                  <div>
                    <Image
                      width={250}
                      height={480}
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={style.nombre}>{producto.nombre}</p>
                    <p>Cantidad : {producto.cantidad}</p>
                    <p className={style.precio}>${producto.precio}</p>
                    <div>
                      <select
                        className={style.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value,
                          })
                        }
                        value={producto.cantidad}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={style.subtotal}>Subtotal:</p>
                    <span>${producto.cantidad * producto.precio}</span>
                  </div>
                  <button
                    className={style.eliminar}
                    type="button"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
          <aside className={style.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: $ {total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
