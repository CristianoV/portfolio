import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import styles from './styles.module.scss';

interface ActiveLinkProps extends LinkProps {
  texto: string;
  href: string;
}

export function ActiveLink({ href, texto }: ActiveLinkProps) {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <p className={href === asPath ? styles.active : ''}>{texto}</p>
    </Link>
  );
}