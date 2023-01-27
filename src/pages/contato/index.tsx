import Head from 'next/head';
import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import { fetchFromApi } from '../../services/axios';
import 'animate.css/animate.min.css';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetchFromApi.post('/api/email', {
      name,
      email,
      message,
    });

    setEmail('');
    setName('');
    setMessage('');
    handleAlert();
  };

  const handleAlert = () => {
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h3>Nome:</h3>
          <input
            required
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Email:</h3>
          <input
            required
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3>Mensagem:</h3>
          <textarea
            required
            name='message'
            id='message'
            cols={30}
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {enviado && (
            <div
              className={`alert alert-success ${styles.message} ${styles.visible}`}
              role='alert'
            >
              Enviado com sucesso!
            </div>
          )}

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  );
}
