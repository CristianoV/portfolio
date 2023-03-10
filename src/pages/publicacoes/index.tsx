import Head from 'next/head';

import styles from './styles.module.scss';
import Card from '../../components/Card';
import { GetStaticProps } from 'next';
import { createClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import * as prismic from '@prismicio/client';
import { useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

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

export default function Publicacoes({
  posts: postsBlog,
  page,
  totalPage,
}: PostsProps) {
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [posts, setPosts] = useState(postsBlog || []);

  async function reqPost(pageNumber: number) {
    const client = createClient();

    const response = await client.query(
      prismic.predicate.at('document.type', 'post'),
      {
        orderings: ['my.post.date desc'],
        fetch: ['post.title', 'post.description', 'post.image'],
        pageSize: 3,
        page: pageNumber,
      }
    );

    return response;
  }

  async function navigatePage(pageNumber: number) {
    const response = await reqPost(pageNumber);

    if (response.results.length === 0) {
      return;
    }

    const getPosts = response.results.map((post) => {
      return {
        slug: String(post.uid),
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

    setPosts(getPosts);
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Head>
        <title>Publicações | CristianoV</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              image={post.image}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>

        <div className={styles.buttonNavigate}>
          <div>
            <button
              disabled={Number(currentPage) === 1}
              onClick={() => navigatePage(1)}
            >
              <FiChevronsLeft size={25} color='#FFF' />
            </button>
            <button
              disabled={Number(currentPage) === 1}
              onClick={() => navigatePage(Number(currentPage - 1))}
            >
              <FiChevronLeft size={25} color='#FFF' />
            </button>
          </div>
          <div>
            <button
              disabled={Number(currentPage) >= Number(totalPage)}
              onClick={() => navigatePage(Number(currentPage + 1))}
            >
              <FiChevronRight size={25} color='#FFF' />
            </button>
            <button
              disabled={Number(currentPage) >= Number(totalPage)}
              onClick={() => navigatePage(Number(totalPage))}
            >
              <FiChevronsRight size={25} color='#FFF' />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const response = await client.query(
    prismic.predicate.at('document.type', 'post'),
    {
      pageSize: 3,
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
    revalidate: 60 * 10,
  };
};
