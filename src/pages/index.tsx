/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image';

import { GetStaticProps } from 'next';
import { createClient } from '../services/prismic';
import { RichText } from 'prismic-dom';
import Link from 'next/link';

type Content = {
  title: string;
  titleContent: string;
  linkAction: string;
  image1: string;

  title2: string;
  titleContent2: string;
  linkAction2: string;
  image2: string;

  title3: string;
  titleContent3: string;
  linkAction3: string;
  image3: string;
};

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  console.log('teste');
  console.log(process.env.VERCEL_URL)
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  return (
    <>
      <Head>
        <title>Portifolio CristianoV</title>
      </Head>
      <main className={styles.container}>
        {/* <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.titleContent}</span>
            <a href={content.linkAction}>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>

          <img src={content.image1} alt='Conteúdos Sujeito Programador' />
        </div>

        <hr className={styles.divisor} /> */}

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.title}</h2>
            <span>{content.titleContent}</span>
          </section>

          <img src={content.image1} alt={content.title} />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src={content.image2} alt={content.title2} />
          <section>
            <h2>{content.title2}</h2>
            <span>{content.titleContent2}</span>
          </section>

        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.title3}</h2>
            <span>{content.titleContent3}</span>
          </section>

          <img src={content.image3} alt={content.title3} />
        </div>
        

        <div className={styles.nextLevelContent}>
          {/* <Image quality={100} src={techsImage} alt="Tecnologias" /> */}
          <h2>
            Para mais informações
          </h2>
          <span>Você pode entrar em contato clicando nesse botão e enviando o seu email</span>
          <Link href='/contato'>
            <button>Mande seu Email</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getSingle('home');

  const {
    title1,
    sub_title1,
    link_action1,
    image1,

    title2,
    sub_title2,
    link_action2,
    image2,

    title3,
    sub_title3,
    link_action3,
    image3,
  } = page.data;

  const content = {
    title: RichText.asText(title1),
    titleContent: RichText.asText(sub_title1),
    linkAction: link_action1.url,
    image1: image1.url,

    title2: RichText.asText(title2),
    titleContent2: RichText.asText(sub_title2),
    linkAction2: link_action2.url,
    image2: image2.url,

    title3: RichText.asText(title3),
    titleContent3: RichText.asText(sub_title3),
    linkAction3: link_action3.url,
    image3: image3.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
