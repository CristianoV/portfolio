import Head from 'next/head';
import styles from '../styles/home.module.scss';
import InitialPage from '../components/InitialPage';
import SobrePage from '../components/SobrePage';
import SkillsPage from '../components/SkillsPage';
import { GetStaticProps } from 'next';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import { createClient } from '../services/prismic';
import { RichText } from 'prismic-dom';
import * as prismic from '@prismicio/client';

type Post = {
  slug: string;
  title: string;
  image: string;
  description: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
  page: string;
  totalPage: string;
}

export default function Home({
  posts: postsBlog,
  page,
  totalPage,
}: PostsProps) {
  return (
    <>
      <Head>
        <title>Portfolio CristianoV</title>
      </Head>
      <div className={styles.backgroundColorInitialPage}>
        <InitialPage />
      </div>
      <div className={styles.background}>
        <SobrePage />
      </div>
      <div className={styles.backgroundColorSkillsPage}>
        <SkillsPage />
      </div>
      <div className={styles.background}>
        <Projects posts={postsBlog} />
        <Contact />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const response = await client.query(
    prismic.predicate.at('document.type', 'post'),
    {
      pageSize: 6,
      fetch: ['post.title', 'post.description', 'post.image'],
      orderings: ['my.post.date desc'],
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find(
          (content: { type: string }) => content.type === 'paragraph'
        )?.text ?? '',
      image: post.data.image.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
    };
  });

  return {
    props: {
      posts,
      page: response.page,
      totalPage: response.total_pages,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
