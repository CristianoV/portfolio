/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.scss';
import Logo from '../../../public/footerLogo.svg';
import up from '../../../public/up.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.footer}>
        <Image src={Logo} alt='Logo' />
        <div>Layout by: Alisson Birck</div>
        <a href='/#header'>
          <Image src={up} alt='Logo' />
        </a>
      </div>
    </footer>
  );
}
