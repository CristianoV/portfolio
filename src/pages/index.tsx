import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Logo from '../../public/logoName.svg';
import Sorriso from '../../public/sorriso.svg';
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
      <div className={styles.background}>
        <main className={styles.container}>
          <div>
            <Image src={Logo} alt='Logo' />
            <h1>DESENVOLVEDOR FULL STACK</h1>
            <p>
              Iniciando minha carreira como Desenvolvedor, busco desafios que
              irão me testar para que eu me torne um melhor profissional.
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
      </div>
      <section className={styles.containerSobre}>
        <Image src={Sorriso} alt='Logo' />
        <div>
          <div className={styles.sobre}>
            <h1>Sobre Mim</h1>
          </div>
          <p>
            Meu nome é Cristiano Vieira e sou um jovem gaúcho de 26 anos. Adoro
            tecnologia e desde os meus 15 anos tenho interesse por programação.
            No final de 2021, decidi que era hora de investir na minha carreira
            e comecei a estudar programação com mais afinco.
          </p>
          <p>
            Fora do trabalho, tenho diversos hobbies. Adoro ir ao cinema, jogar
            video game e atirar com arco e flecha. Tenho um cachorro chamado
            Floki que tem 4 anos de idade e que é minha companhia nos momentos
            de lazer.
          </p>
          <p>
            No geral, sou alguém que adora aprender coisas novas e desafios.
            Estou animado para ver onde a minha carreira de programador me
            levará e quais projetos emocionantes terei a oportunidade de
            trabalhar no futuro.
          </p>
          <Link href='/contato'>ME CONTRATE</Link>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
