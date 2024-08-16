import React from 'react';
import { Link } from './Link';

const i18n = {
  es: {
    title: 'Sobre mi',
    description: 'Hola me llamo Santiago, bienvenido a este proyecto',
    button: 'Ir a home'
  },
  en: {
    title: 'About me',
    description: 'Hello! My name is Santiago. Welcome to this project',
    button: 'Go to Home'
  }
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function About ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es');
  return (
    <>
      <h2>{i18n.title}</h2>
      <img style={{ width: '30%', borderRadius: '100px' }} src='/Lichestation.jpeg' alt='Santiago Armesto Foto' />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  );
}
