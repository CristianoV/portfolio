import styles from './styles.module.scss';
import nodejs from '../../../public/skills/nodejs.svg';
import react from '../../../public/skills/react.svg';
import next from '../../../public/skills/next.svg';
import git from '../../../public/skills/git.svg';
import javascript from '../../../public/skills/javascript.svg';
import redux from '../../../public/skills/redux.svg';
import express from '../../../public/skills/express.svg';
import bootstrap from '../../../public/skills/bootstrap.svg';
import typescript from '../../../public/skills/typescript.svg';
import python from '../../../public/skills/python.svg';
import Card from './Card';

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <h1>Linguagens e tecnologias que domino</h1>
      <div className={styles.cards}>
        <Card img={javascript} level={8} />
        <Card img={typescript} level={7} />
        <Card img={python} level={6} />
        <Card img={nodejs} level={9} />
        <Card img={react} level={8} />
        <Card img={next} level={8} />
        <Card img={redux} level={8} />
        <Card img={git} level={8} />
        <Card img={express} level={7} />
        <Card img={bootstrap} level={6} />
      </div>
    </div>
  );
}
