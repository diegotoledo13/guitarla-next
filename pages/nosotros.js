import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'
export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description="Sobre nosotros, GuitarraLA, tienda de música">
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div>
            <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros' />
              <p>
              ¡Bienvenido a GuitarraLA! En GuitarraLA, estamos apasionados por la música y comprometidos con proporcionar a nuestros clientes las mejores experiencias musicales a través de nuestras excepcionales guitarras. Desde 2023, nos hemos dedicado a ofrecer instrumentos de alta calidad y servicio excepcional, convirtiéndonos en un referente confiable para músicos de todos los niveles.
              Lo que nos distingue es nuestra devoción por el arte de la guitarra. Ya sea que seas un principiante entusiasta o un músico experimentado, en GuitarraLA encontrarás una amplia variedad de guitarras que se adaptan a tus gustos y necesidades. Nos enorgullece colaborar con reconocidos fabricantes y artesanos para garantizar la excelencia en cada instrumento que ofrecemos.
              Nuestra misión es más que vender guitarras; queremos inspirar a músicos a explorar nuevas melodías, a encontrar su propio sonido y a disfrutar del viaje musical. Nos esforzamos por crear un ambiente donde la pasión por la música se mezcla con la calidad de nuestros productos.
              </p>
              <p>En GuitarraLA, valoramos la satisfacción del cliente y nos esforzamos por superar tus expectativas. Nuestro equipo está formado por amantes de la música que están aquí para brindarte asesoramiento experto y ayudarte a encontrar la guitarra perfecta que se adapte a tu estilo.
              Gracias por ser parte de nuestra comunidad musical. Explora nuestro catálogo, descubre la magia de nuestras guitarras y únete a nosotros en este viaje melódico. ¡Estamos aquí para hacer que tu experiencia musical sea inolvidable!
              ¡Gracias por elegir GuitarraLA!
              </p>

            </div>
          </div>
        </main>
    </Layout>
  )
}
