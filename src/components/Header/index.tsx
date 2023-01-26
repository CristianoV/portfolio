import styles from './styles.module.scss';
import Image from 'next/image';
// import logo from '../../../public/images/logo.svg';

import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Link href='/'>
          <Image src={logo} alt='Sujeito Programador Logo' />
        </Link> */}

        <nav>
          <ActiveLink href='/' texto='Home' />
          <ActiveLink href='/posts' texto='Conteúdos' />
          <ActiveLink href='/sobre' texto='Habilidades' />
        </nav>

        <a
          className={styles.readyButton}
          type='button'
          href='/contato'
        >
          Contato
        </a>
      </div>
    </header>
  );
}