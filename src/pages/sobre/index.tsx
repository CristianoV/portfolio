import styles from './styles.module.scss';
import SobrePage from '../../components/SobrePage';
import SkillsPage from '../../components/SkillsPage';

export default function sobre() {
  return (
    <div className={styles.container}>
      <SobrePage />
      <SkillsPage />
    </div>
  )
}