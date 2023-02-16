import Image from 'next/image';
import Link from 'next/link';
import Sorriso from '../../../public/sorriso.svg';
import styles from './styles.module.scss';

export default function SobrePage() {
  return (
    <section className={styles.containerSobre}>
      <Image src={Sorriso} alt='Logo' />
      <div>
        <div className={styles.sobre}>
          <h1>Sobre Mim</h1>
        </div>
        <div>
          <p>
            Meu nome é Cristiano Vieira e sou um jovem gaúcho de 26 anos. Adoro
            tecnologia e desde os meus 15 anos tenho interesse por programação.
            No final de 2021, decidi que era hora de investir na minha carreira
            e comecei a estudar programação com mais afinco.
          </p>
          <p>
            Fora do trabalho, tenho diversos hobbies. Adoro ir ao cinema, jogar
            video game e atirar com arco e flecha. Tenho um cachorro chamado
            Floki que tem 4 anos de idade e que é minha companhia nos momentos
            de lazer.
          </p>
          <p>
            No geral, sou alguém que adora aprender coisas novas e desafios.
            Estou animado para ver onde a minha carreira de programador me
            levará e quais projetos emocionantes terei a oportunidade de
            trabalhar no futuro.
          </p>
        </div>
        <Link href='/contato'>ME CONTRATE</Link>
      </div>
    </section>
  );
}
