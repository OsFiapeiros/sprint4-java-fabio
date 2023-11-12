import React from 'react';
import '../scss/Contextualização.scss';

function Contextualizacao() {
  return (
    <div className="container">
      <h2 id="titulocontext">Transporte Sustentável</h2>

      <div className="row">
        <section className="col-md-6 contextCima">
          <div className="row">
            <div className="col-md-12">
              <div className="texto">
                <p className="fs-5">
                  O transporte sustentável é fundamental para o futuro de nosso planeta. Com a crescente preocupação com as emissões de carbono e a poluição, o desenvolvimento de meios de transporte mais limpos é uma prioridade.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="imagensBaixo">
                <img src='/imagens/carro-eletrico.jpg' alt="Carro Elétrico" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </section>

        <section className="col-md-6 contextBaixo">
          <div className="row">
            <div className="col-md-12">
              <div className="texto">
                <p className="fs-5">
                  Inovações em transporte público ecologicamente correto e o incentivo ao uso desses meios são parte integrante de uma visão de mobilidade sustentável. Desenvolver infraestrutura inteligente é uma ação crucial para alcançar um sistema de transporte mais limpo.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="imagensBaixo">
                <img src='/imagens/bicicletas.jpg' alt="Bicicletas" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contextualizacao;
