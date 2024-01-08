import style from "../styles/curso.module.css";
export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  const texto = contenido[0].children.map((item) => item.text).join(" ");
  console.log(imagen);
  return (
    <section className={`${style.curso}`}>
      <style jsx>{`
        .curso {
          background-image: url(${imagen.data.attributes.url});
        }
      `}</style>
      <div className={`contendedor ${style.grid}`}>
        <div className={style.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{texto}</p>
        </div>
      </div>
    </section>
  );
}
