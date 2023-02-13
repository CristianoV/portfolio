import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import 'animate.css/animate.min.css';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { SiHackerrank } from 'react-icons/si';
import { TiMail } from 'react-icons/ti';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);
  // const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if (recaptchaVerified) {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_GMAIL as string,
        process.env.NEXT_PUBLIC_TEMPLATE_SEND_EMAIL as string,
        {
          remetente: name,
          mensagem: message,
          email: email,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );
      handleAlert();
    } catch (error) {
      console.log(error);
    } finally {
      setEmail('');
      setName('');
      setMessage('');
      // setRecaptchaVerified(false);
    }
    // }
  };

  const handleAlert = () => {
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  // const onRecaptchaChange = (value: any) => {
  //   try {
  //     if (value) {
  //       setRecaptchaVerified(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || 'teste'}
            onChange={onRecaptchaChange}
          /> */}
          {enviado && (
            <div
              className={`alert alert-success ${styles.message} ${styles.visible}`}
              role='alert'
            >
              Enviado com sucesso!
            </div>
          )}
          <button
            disabled={!name || !email || !message ? true : false}
            type='submit'
          >
            Enviar
          </button>
        </form>
        <section>
          <h3>Contatos</h3>
          <h4>Celular:</h4>
          <p>
            <BsWhatsapp size={25} />
            (51) 9 9734-0308
          </p>

          <h4>Email:</h4>
          <p>
            <TiMail size={25} />
            cristianoviieira@gmail.com
          </p>
          <div>
            <Link href='https://github.com/CristianoV' target='_blank'>
              <BsGithub size={32} />
            </Link>

            <Link
              href='https://www.linkedin.com/in/cristianov/'
              target='_blank'
            >
              <BsLinkedin size={32} />
            </Link>

            <Link href='https://www.instagram.com/cristiianov/' target='_blank'>
              <BsInstagram size={32} />
            </Link>

            <Link
              href='https://www.hackerrank.com/cristianoviieira'
              target='_blank'
            >
              <SiHackerrank size={32} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
