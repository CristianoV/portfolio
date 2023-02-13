import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <h1>
          CristianoV<span>.</span>
        </h1>
      </Link>

      <nav>
        <ActiveLink href='/' texto='Início' />
        <ActiveLink href='/publicacoes' texto='Publicações' />
        <ActiveLink href='/habilidades' texto='Habilidades' />
        <Link className={styles.readyButton} type='button' href='/contato'>
          <p>ME CONTRATE</p>
        </Link>
      </nav>
    </header>
  );
}
