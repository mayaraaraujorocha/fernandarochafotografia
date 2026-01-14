import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo ao site Fernanda Rocha Fotografia!</h2>
        <p>Portfólio, informações e contato para ensaios fotográficos.</p>
      </main>
      <Footer />
    </>
  );
}
