import styles from './styles.module.scss';
import Card from './Card';

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <h1>Linguagens e tecnologias que domino</h1>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
