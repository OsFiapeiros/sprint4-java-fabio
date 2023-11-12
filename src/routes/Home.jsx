import React from 'react';
import '../scss/Home.scss';

function Home() {
  return (
    <div className="home">
      <div id="textoindex" className="row">
        <div className="col-15">
          <h1>Transporte Sustentável para um Futuro Melhor</h1>
          <p>
            Em colaboração com diversas empresas comprometidas com a sustentabilidade, estamos empenhados em desenvolver soluções inovadoras para um sistema de transporte mais limpo e eficiente. O transporte sustentável desempenha um papel crucial na redução da pegada de carbono e na proteção do meio ambiente. Estamos focados em implementar tecnologias verdes e práticas de mobilidade conscientes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img src='/imagens/sustainable_transport.png' alt="Sustainable Transport" className="img-fluid large-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
