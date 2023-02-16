import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';

type DivStyle = {
  [key: number]: string;
};

export default function Card({
  level,
  img,
  text,
}: {
  level: number;
  img: StaticImageData;
  text: string;
}) {
  const divStyle: DivStyle = {
    6: styles.level6,
    7: styles.level7,
    8: styles.level8,
    9: styles.level9,
  };

  return (
    <div className={styles.container}>
      <Image src={img} alt='NodeJS' />
      <div className={divStyle[level]}>
        <div></div>
      </div>
      <h1>{text}</h1>
    </div>
  );
}
