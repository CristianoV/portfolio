import { createClient } from '../../services/prismic';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { RichText } from 'prismic-dom';
import styles from './post.module.scss';

interface PostProps {
  post: {
    slug: string;
    title: string;
    description: string;
    image: string;
    updatedAt: string;
  };
}

export default function Publicacoes({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <Image
            quality={100}
            src={post.image}
            width={720}
            height={410}
            alt={post.title}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
          />

          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></div>
        </article>
      </main>
    </>
  );
}

interface PostParams {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as unknown as PostParams;
  const prismic = createClient();
  const response = await prismic.getByUID('post', String(id), {});

  if (!response) {
    return {
      redirect: {
        destination: '/publicacoes',
        permanent: false,
      },
    };
  }
  

  const post = {
    slug: id,
    title: RichText.asText(response.data.title),
    description: RichText.asHtml(response.data.description),
    image: response.data.image.url,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};