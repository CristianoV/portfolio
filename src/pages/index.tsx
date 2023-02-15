import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Logo from '../../public/logoName.svg';
import Cristiano from '../../public/cristianoPicture.svg';
import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio CristianoV</title>
      </Head>
      <main className={styles.container}>
        <div>
          <Image src={Logo} alt='Logo' />
          <h1>DESENVOLVEDOR FULL STACK</h1>
          <p>
            Iniciando minha carreira como Desenvolvedor, busco desafios que irão
            me testar para que eu me torne um melhor profissional.
          </p>
          <nav>
            <Link href='/contato'>ME CONTRATE</Link>
            <Link href='/contato'>PUBLICAÇÕES</Link>
          </nav>
          <div>
            <Link href='https://github.com/CristianoV' target='_blank'>
              <BsGithub size={32} />
              GitHub
            </Link>
            <Link
              href='https://www.linkedin.com/in/cristianov/'
              target='_blank'
            >
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
