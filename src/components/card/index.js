import { Link } from 'react-router-dom';

function Card() {
    return (

      <section class="article-home">
      
        <article className="card-article">
          <img src="../../img/grecia.png" alt="Bandeira Grécia" width="50px"/>
          <h4>Grecia</h4>
          <p>A Grécia é um país do sudeste da Europa com milhares de ilhas
            espalhadas pelos mares Egeu e anico. Bastante influente na
            antiguidade, a não é considerada o berao da civilizaçao ocidental.
            Atenas, sua capital, conserva monumentos como a Acrepole, do seculo V
            a.C.</p>
            <Link to="">40% Off / Aproveite!</Link>
        </article>
      
        <article className="card-article">
          <img src="img/franca.png" alt="bandeira Inglaterra" width="50px"/>
          <h4>Páris</h4>
          <p>Paris, a capital da França, é uma importante cidade européia e
            um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem
            urbana do seculo XIX e cortada por avenidas largas e pelo rio Sena. A
            cidade e conhecida por monumentos como a Torre Eiffel e a Catedral de
            Notre-Dame</p>
            <Link to="">20% Off / Aproveite!</Link>
        </article>
      
        <article className="card-article">
          <img src="img/alemanha.png" alt="Bandeira Alemanha" width="50px"/>
          <h4>Alemanha</h4>
          <p>A Alemanha e um país situado na Europa Ocidental com uma
            paisagem de florestas, rios, cordilheiras e praias do Mar do Norte. A
            nao tem mais de 2 milênios de história. Berlim, a capital, abriga
            cenarios artisticos e de vida noturna, o Portao de Brandemburgo e
            muitos locais relacionados Á Segunda Guerra Mundial.</p>
            <Link to="">10% Off / Aproveite!</Link>
        </article>
      
      </section>
    
    );
  }
  
export default Card;