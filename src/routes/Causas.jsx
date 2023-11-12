import React from 'react';
import '../scss/Causas.scss';

function Causas() {
  return (
    <div className="causas-container">
      <h2>Efeitos do Transporte não Sustentável</h2>

      <div className="causas-grid">
        <div className="causas-box">
          <h3>Poluição do Ar</h3>
          <p>
            O alto tráfego de veículos movidos a combustíveis fósseis é uma das principais causas da poluição do ar em áreas urbanas. Isso contribui para problemas de saúde e degradação ambiental.
          </p>
        </div>

        <div className="causas-box">
          <h3>Emissão de Gases de Efeito Estufa</h3>
          <p>
            O transporte baseado em combustíveis fósseis é responsável por uma grande parcela das emissões de gases do efeito estufa. Isso leva ao aquecimento global e às mudanças climáticas.
          </p>
        </div>

        <div className="causas-box">
          <h3>Congestionamento Urbano</h3>
          <p>
            O aumento do número de veículos nas cidades contribui para o congestionamento do trânsito. Isso não apenas gera estresse, mas também consome mais recursos e polui o ar.
          </p>
        </div>

        <div className="causas-box">
          <h3>Uso Excessivo de Recursos Não Renováveis</h3>
          <p>
            A dependência de combustíveis não renováveis leva à exploração excessiva de recursos finitos, criando um impacto negativo na sustentabilidade a longo prazo.
          </p>
        </div>

        {/* Novos boxes adicionados */}
        <div className="causas-box">
          <h3>Desmatamento</h3>
          <p>
            A expansão das estradas e o aumento do tráfego causam desmatamento, destruindo habitats naturais e contribuindo para a perda da biodiversidade.
          </p>
        </div>

        <div className="causas-box">
          <h3>Dependência de Combustíveis Fósseis</h3>
          <p>
            A dependência contínua de combustíveis fósseis promove a instabilidade energética e econômica, incentivando práticas insustentáveis.
          </p>
        </div>

        <div className="causas-box">
          <h3>Impacto na Saúde Pública</h3>
          <p>
            Emissões de veículos contribuem para problemas de saúde, como problemas respiratórios e cardiovasculares, afetando diretamente as comunidades urbanas.
          </p>
        </div>

        <div className="causas-box">
          <h3>Poluição Sonora</h3>
          <p>
            O tráfego intenso gera poluição sonora, afetando a qualidade de vida das pessoas e o equilíbrio dos ecossistemas urbanos.
          </p>
        </div>
        {/* Fim dos novos boxes adicionados */}
      </div>
    </div>
  );
}

export default Causas;
