import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import 'animate.css/animate.min.css';
import programador from '../../../public/Programmer-amico 1.svg';
import Image from 'next/image';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [input, setInput] = useState('');

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

  return (
    <div className={styles.container} id='Contact'>
      <Image src={programador} alt='Programador' />
      <form onSubmit={handleSubmit} className={styles.containerContact}>
        <h1>Entre em contato!</h1>
        <div>
          <p>Selecione um assunto</p>
          <div className={styles.input}>
            <label
              htmlFor='emprego'
              className={input === 'emprego' ? styles.label : ''}
            >
              Oportunidade de emprego
              <input
                type='radio'
                name='assunto'
                id='emprego'
                value='emprego'
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <label
              htmlFor='Bug'
              className={input === 'Bug' ? styles.label : ''}
            >
              Reporte de Bug
              <input
                type='radio'
                name='assunto'
                id='Bug'
                value='Bug'
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <label
              htmlFor='Feedback'
              className={input === 'Feedback' ? styles.label : ''}
            >
              Feedback
              <input
                type='radio'
                name='assunto'
                id='Feedback'
                value='Feedback'
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <label
              htmlFor='Outros'
              className={input === 'Outros' ? styles.label : ''}
            >
              Outros assuntos
              <input
                type='radio'
                name='assunto'
                id='Outros'
                value='Outros'
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className={styles.inputBox}>
          <input
            required
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Seu Nome</span>
        </div>
        <div className={styles.inputBox}>
          <input
            required
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Seu E-mail</span>
        </div>
        <div className={styles.inputBox}>
          <textarea
            required
            name='message'
            id='message'
            cols={30}
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span>Sua Mensagem</span>
        </div>

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
    </div>
  );
}
