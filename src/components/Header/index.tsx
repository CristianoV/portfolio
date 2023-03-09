/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';
import Logo from '../../../public/logoSite.svg';
import Link from 'next/link';
import Image from 'next/image';

interface CustomStyle extends React.CSSProperties {
  '--i': number;
}

export function Header() {
  return (
    <div className={styles.containerHeader} id='header'>
      <header className={styles.container}>
        <Link href='/'>
          <Image src={Logo} alt='Logo' />
        </Link>

        <nav>
          <ActiveLink href='/' texto='Início' number={1} />
          <ActiveLink href='/publicacoes' texto='Publicações' number={2} />
          <ActiveLink href='/#sobre' texto='Sobre' number={3} />
          <a
            className={styles.readyButton}
            type='button'
            href='/#Contact'
            style={{ '--i': 4 } as CustomStyle}
          >
            <p>ME CONTRATE</p>
          </a>
        </nav>
      </header>
    </div>
  );
}
