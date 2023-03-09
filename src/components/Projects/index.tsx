import styles from './styles.module.scss';
import Card from '../Card';

type Post = {
  slug: string;
  title: string;
  image: string;
  description: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Projects({ posts }: PostsProps) {
  return (
    <div className={styles.container}>
      <section>
        <h1>Projetos</h1>
        <div>
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
      </section>
    </div>
  );
}
