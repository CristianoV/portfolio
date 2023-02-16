import Head from 'next/head';
import styles from '../styles/home.module.scss';
import InitialPage from '../components/InitialPage';
import SobrePage from '../components/SobrePage';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio CristianoV</title>
      </Head>
      <div className={styles.background}>
        <InitialPage />
        <SobrePage />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
