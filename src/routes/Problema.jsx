import React from 'react';
import '../scss/Problema.scss';

function Problema() {
  return (
    <div className="problema">
      <h2>Problemas no Transporte não Sustentável</h2>

      <section className="gridproblem">
        <div className="conteudo">
          <div className="texto">
            <p>
              O transporte poluente, congestionamentos, falta de infraestrutura e acidentes de trânsito são problemas urgentes que demandam soluções inovadoras e sustentáveis.
            </p>
            <p>
              Incentivar veículos elétricos, promover o transporte coletivo e desenvolver infraestrutura inteligente são passos fundamentais para melhorar a mobilidade urbana.
            </p>
            <p>
              Outro problema significativo é a dependência excessiva de combustíveis fósseis, que contribuem significativamente para as emissões de gases de efeito estufa, resultando em mudanças climáticas e poluição do ar.
            </p>
            <p>
              Além disso, o uso maciço de veículos individuais não apenas aumenta o congestionamento nas cidades, mas também consome recursos e contribui para problemas de saúde pública.
            </p>
            <p>
              A falta de integração entre os diferentes modos de transporte também é um desafio. Uma infraestrutura que promova a intermodalidade entre transporte público, ciclovias e pedestres é essencial para reduzir a dependência de veículos individuais.
            </p>
            <p>
              Problemas de acessibilidade, especialmente em áreas remotas ou mal atendidas por transporte público, resultam em exclusão social e econômica para muitos cidadãos.
            </p>
          </div>
          <div className="imagem">
            <img src="/imagens/congestionamento.jpg" alt="Congestionamento" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Problema;
