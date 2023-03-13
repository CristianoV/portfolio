import styles from './styles.module.scss';
import Card from '../Card';

type Post = {
  slug: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Projects({ posts }: PostsProps) {
  const postsChunks: Post[][] = posts.reduce(
    (resultArray: Post[][], item: Post, index: number) => {
      const chunkIndex = Math.floor(index / (posts.length / 2));

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  return (
    <div className={styles.container}>
      <section>
        <h1>Projetos</h1>
        {postsChunks.map((chunk: Post[], index: number) => (
          <div key={index} className={styles.cardContainer}>
            {chunk.map((post: Post) => (
              <Card
                key={post.slug}
                title={post.title}
                image={post.image}
                description={post.subTitle}
                slug={post.slug}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
