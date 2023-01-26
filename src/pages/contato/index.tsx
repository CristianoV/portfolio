import Head from 'next/head';
import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import { fetchFromApi } from '../../services/axios';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetchFromApi.post('/email', {
      name,
      email,
      message,
    });

    setEmail('');
    setName('');
    setMessage('');
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

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  );
}
