import style from "../styles/curso.module.css";
export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  const texto = contenido[0].children.map((item) => item.text).join(" ");
  return (
    <section className={`${style.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className={`contendedor ${style.grid}`}>
        <div className={style.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{texto}</p>
        </div>
      </div>
    </section>
  );
}
