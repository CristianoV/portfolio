/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import Cristiano from '../../../public/cristianoPicture.svg';
import Logo from '../../../public/logoName.svg';
import styles from './styles.module.scss';

export default function InitialPage() {
  return (
    <main className={styles.container}>
      <div>
        <Image src={Logo} alt='Logo' />
        <h1>DESENVOLVEDOR FULL STACK</h1>
        <p>
          Iniciando minha carreira como Desenvolvedor, busco desafios que irão
          me testar para que eu me torne um melhor profissional.
        </p>
        <nav>
          <a href='/#Contact'>ME CONTRATE</a>
          <Link href='/publicacoes'>PUBLICAÇÕES</Link>
        </nav>
        <div>
          <Link href='https://github.com/CristianoV' target='_blank'>
            <BsGithub size={32} />
            GitHub
          </Link>
          <Link href='https://www.linkedin.com/in/cristianov/' target='_blank'>
            <BsLinkedin size={32} />
            LinkedIn
          </Link>
          <a href='/files/CristianoVieira.pdf' download>
            <FiDownload size={32} />
            Baixe meu currículo
          </a>
        </div>
      </div>
      <Image src={Cristiano} alt='CristianoV' />
    </main>
  );
}
