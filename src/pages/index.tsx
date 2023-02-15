/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Logo from '../../public/logoName.svg';
import Cristiano from '../../public/cristianoPicture.svg';
import Image from 'next/image';

import { GetStaticProps } from 'next';
import { createClient } from '../services/prismic';
import { RichText } from 'prismic-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { FaFileDownload } from 'react-icons/fa';

// type Content = {
//   title: string;
//   titleContent: string;
//   linkAction: string;
//   image1: string;

//   title2: string;
//   titleContent2: string;
//   linkAction2: string;
//   image2: string;

//   title3: string;
//   titleContent3: string;
//   linkAction3: string;
//   image3: string;
// };

// interface ContentProps {
//   content: Content;
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio CristianoV</title>
      </Head>
      <main className={styles.container}>
        <div>
          <Image
            src={Logo}
            alt='Logo'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
          />
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
              <FaFileDownload size={32} />
              Baixe meu currículo
            </a>
          </div>
        </div>
        <Image src={Cristiano} alt='CristianoV' />
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient({ previewData });

//   const page = await client.getSingle('home');

//   const {
//     title1,
//     sub_title1,
//     link_action1,
//     image1,

//     title2,
//     sub_title2,
//     link_action2,
//     image2,

//     title3,
//     sub_title3,
//     link_action3,
//     image3,
//   } = page.data;

//   const content = {
//     title: RichText.asText(title1),
//     titleContent: RichText.asText(sub_title1),
//     linkAction: link_action1.url,
//     image1: image1.url,

//     title2: RichText.asText(title2),
//     titleContent2: RichText.asText(sub_title2),
//     linkAction2: link_action2.url,
//     image2: image2.url,

//     title3: RichText.asText(title3),
//     titleContent3: RichText.asText(sub_title3),
//     linkAction3: link_action3.url,
//     image3: image3.url,
//   };

//   return {
//     props: {
//       content,
//     },
//     revalidate: 60 * 60 * 12, // 12 hours
//   };
// };
