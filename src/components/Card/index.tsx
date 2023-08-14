import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  description: string;
  slug: string;
  link_repository?: string;
  link_preview?: string;
}

export default function Card({
  title,
  image,
  description,
  slug,
  link_repository,
  link_preview,
}: CardProps) {
  return (
    <div className={styles.container}>
      <Image src={image} alt='NextJS' width={500} height={500} quality={100} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link key={slug} href={`/publicacoes/${slug}`}>
            <button className={styles.button_more}>Saiba Mais</button>
          </Link>
          {!!link_repository && (
            <Link
              key={slug}
              href={link_preview ? link_preview : ''}
              target='_blank'
            >
              <button className={styles.button_deploy}>Visualizar site</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
