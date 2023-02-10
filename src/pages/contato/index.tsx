import Head from 'next/head';
import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import 'animate.css/animate.min.css';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (recaptchaVerified) {
      try {
        emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_GMAIL as string,
          process.env.NEXT_PUBLIC_TEMPLATE_SEND_EMAIL as string,
          {
            remetente: name,
            mensagem: message,
            email: email,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        );
        handleAlert();
      } catch (error) {
        console.log(error);
      } finally {
        setEmail('');
        setName('');
        setMessage('');
        setRecaptchaVerified(false);
      }
    }
  };

  const handleAlert = () => {
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  const onRecaptchaChange = (value: any) => {
    try {
      if (value) {
        setRecaptchaVerified(true);
      }
    } catch (error) {
      console.log(error);
    }
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
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || 'teste'}
            onChange={onRecaptchaChange}
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
