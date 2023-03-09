import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../../public/Programmer-amico 1.svg';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function Card({ title, image, description, slug }: CardProps) {
  return (
    <div className={styles.container}>
      <Image src={image} alt='NextJS' width={500} height={500} quality={100} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link key={slug} href={`/publicacoes/${slug}`}>
          <button>Saiba Mais</button>
        </Link>
      </div>
    </div>
  );
}
