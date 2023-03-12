/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.scss';
import Logo from '../../../public/footerLogo.svg';
import up from '../../../public/up.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.footer}>
        <Image src={Logo} alt='Logo' />
        <div>
          <Link
            href='https://www.linkedin.com/in/alissonbirck/'
            target='_blank'
          >
            Layout by: Alisson Birck
          </Link>
          <Link href='https://www.linkedin.com/in/cristianov/' target='_blank'>
            Developed by: Cristiano Vieira
          </Link>
        </div>
        <a href='/#header'>
          <Image src={up} alt='Logo' />
        </a>
      </div>
    </footer>
  );
}
