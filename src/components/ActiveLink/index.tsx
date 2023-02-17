/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import styles from './styles.module.scss';

interface ActiveLinkProps extends LinkProps {
  texto: string;
  href: string;
}

export function ActiveLink({ href, texto }: ActiveLinkProps) {
  const { asPath } = useRouter();

  if (texto === 'Sobre') {
    return (
      <a
        href='/#sobre'
        className={href === asPath ? styles.active : styles.container}
      >
        <p>Sobre</p>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={href === asPath ? styles.active : styles.container}
    >
      <p>{texto}</p>
      {href === asPath && <hr className={styles.activeHr} />}
    </Link>
  );
}
