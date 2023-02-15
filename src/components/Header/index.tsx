import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';
import Logo from '../../../public/logoName2.svg';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <Image src={Logo} alt='Logo' />
      </Link>

      <nav>
        <ActiveLink href='/' texto='Início' />
        <ActiveLink href='/publicacoes' texto='Publicações' />
        <ActiveLink href='/sobre' texto='Sobre' />
        <Link className={styles.readyButton} type='button' href='/contato'>
          <p>ME CONTRATE</p>
        </Link>
      </nav>
    </header>
  );
}
