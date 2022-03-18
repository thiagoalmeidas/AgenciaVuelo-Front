import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";


function Promocoes() {
    return (
    <div>
      <Helmet>
        <title>Promoções</title>             
      </Helmet>
      <Header />
      <div className="container">         
          <main>    

            <div class="page-tit">
              <h2>Promoções</h2>
              <p>Fique por dentro das Promoções!</p>
              <span><Link to="/">Home</Link> / <Link to="/Promocoes">Promoções</Link> </span>
            </div>

            <h2 className="destinos-alta">Destinos em Promocao!</h2>
            <Card />
            <Contact /> 
          </main>
          <Footer />     
      </div> 
    </div>
    );
  }
  
  export default Promocoes;