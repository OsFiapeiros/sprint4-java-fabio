import React from 'react';
import '../scss/ProblemaxSolucao.scss';

function ProblemaXSolucao() {
  return (
    <div className="problema-solucao">
      <div className="section">
        <h3>Problema - Transporte não Sustentável</h3>
        <div className="problem-section">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="mb-4 d-flex justify-content-center">
              <div className="problem-box">
                <h2>Emissão de Carbono</h2>
                <p>Elevada emissão de carbono proveniente de veículos movidos a combustíveis fósseis, como carros, caminhões e ônibus, contribui massivamente para o aumento dos gases de efeito estufa na atmosfera, levando ao aquecimento global e às mudanças climáticas.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="problem-box">
                <h2>Poluição do Ar</h2>
                <p>A poluição do ar, resultado direto da queima de combustíveis fósseis e processos industriais, causa impactos negativos na saúde humana, sendo associada a doenças respiratórias, cardiovasculares e até mesmo câncer. Além disso, contribui para a formação de smog, diminuindo a qualidade do ar nas áreas urbanas.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="problem-box">
                <h2>Esgotamento de Recursos</h2>
                <p>O uso não sustentável de recursos não renováveis, como petróleo, gás natural e carvão, leva ao seu esgotamento. Esses recursos são finitos e, se continuarmos a depender deles sem considerar alternativas sustentáveis, enfrentaremos uma escassez de recursos energéticos e materiais no futuro.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="problem-box">
                <h2>Impactos Ambientais</h2>
                <p>A elevada emissão de carbono e a poluição do ar têm efeitos adversos no meio ambiente. Contribuem para a degradação dos ecossistemas, afetam a biodiversidade e aumentam os riscos de eventos climáticos extremos, como inundações e secas, causando impactos significativos na vida selvagem e nos seres humanos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Solução - Transporte Sustentável</h3>
        <div className="solution-section">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="mb-4 d-flex justify-content-center">
              <div className="solution-box">
                <h2>Veículos Elétricos</h2>
                <p>A utilização de veículos elétricos, alimentados por energia limpa e renovável, é uma solução crucial para reduzir as emissões de carbono e diminuir a poluição do ar, proporcionando uma opção mais sustentável e ecológica para o transporte diário.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="solution-box">
                <h2>Energias Renováveis</h2>
                <p>A promoção de energias limpas e renováveis, como solar, eólica e hidrelétrica, desempenha um papel fundamental na diminuição da dependência de combustíveis fósseis, reduzindo assim a emissão de carbono e contribuindo para a sustentabilidade no setor de transporte.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="solution-box">
                <h2>Mobilidade Sustentável</h2>
                <p>A promoção de soluções de transporte sustentável, como o incentivo ao uso de transporte público, ciclovias, compartilhamento de carros e campanhas de conscientização, é essencial para construir um futuro mais limpo e eficiente, reduzindo as emissões de carbono e melhorando a qualidade do ar.</p>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-center">
              <div className="solution-box">
                <h2>Redução da Pegada de Carbono</h2>
                <p>A redução significativa na emissão de gases de efeito estufa é alcançada por meio de práticas sustentáveis, como o uso de tecnologias mais eficientes, a conservação de energia e a implementação de estratégias de mitigação, visando diminuir os impactos ambientais e construir um futuro mais verde.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemaXSolucao;
