import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='contenedor'>
                <Image src="/img/logo.svg"
                    alt="Logotipo de GuitarraLA"
                    width={250}
                    height={40}
                />
                <nav>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                </nav>
            </div>
        </header>
    )
  }
  