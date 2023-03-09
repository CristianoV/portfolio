/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';
import Logo from '../../../public/logoSite.svg';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <div className={styles.containerHeader} id="header">
      <header className={styles.container}>
        <Link href='/'>
          <Image src={Logo} alt='Logo' />
        </Link>

        <nav>
          <ActiveLink href='/' texto='Início' />
          <ActiveLink href='/publicacoes' texto='Publicações' />
          <ActiveLink href='/#sobre' texto='Sobre' />
          <a className={styles.readyButton} type='button' href='/#Contact'>
            <p>ME CONTRATE</p>
          </a>
        </nav>
      </header>
    </div>
  );
}
