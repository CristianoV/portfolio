import Head from 'next/head';
import styles from '../styles/home.module.scss';
import InitialPage from '../components/InitialPage';
import SobrePage from '../components/SobrePage';
import SkillsPage from '../components/SkillsPage';
import { GetStaticProps } from 'next';
import Contact from '../components/Contact';

export default function Home() {
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
        <Contact />
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
