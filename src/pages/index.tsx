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
  subTitle: string;
  image: string;
  description: string;
  updatedAt: string;
  link_repository?: string;
  link_preview?: string;
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

  interface Response {
    results: {
      uid: string;
      last_publication_date: string;
      data: {
        title: string;
        position: string;
        subtitle: string;
        description: {
          type: string;
          text: string;
        }[];
        image: {
          url: string;
        };
        link_repository: {
          url: string;
        };
        link_preview: {
          url: string;
        };
      };
    }[];
    page: string;
    total_pages: string;
  }

  const response = (await client.query(
    prismic.predicate.at('document.type', 'project'),
    {
      pageSize: 6,
      fetch: [
        'project.title',
        'project.position',
        'project.description',
        'project.image',
        'project.subtitle',
        'project.link_repository',
        'project.link_preview',
      ],
    }
  )) as unknown as Response;

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      position: Number(post.data.position),
      subTitle: RichText.asText(post.data.subtitle),
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
      link_repository: post.data.link_repository.url || null,
      link_preview: post.data.link_preview.url || null,
    };
  });

  posts.sort((a, b) => {
    if (a.position > b.position) {
      return 1;
    }
    if (a.position < b.position) {
      return -1;
    }
    return 0;
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
