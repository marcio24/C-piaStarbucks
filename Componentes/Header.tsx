import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import '../style.css';

function ColorSchemesExample() {
  return (
    <div>
      <div className="header">
        <div className="navb">
          <div className="textos">
            <img
              src="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              className="logoSt"
            />
            <ul className="Ul">
              <li>
                <a href="#Menu" className="Ul">
                  Menu
                </a>
              </li>
              <li>
                <a href="#Rewards" className="Ul">
                  Rewards
                </a>
              </li>
              <li>
                <a href="#NossoCF" className="Ul">
                  Nosso Café
                </a>
              </li>
              <li>
                <a href="#ImpactoSc" className="Ul">
                  Impacto Social
                </a>
              </li>
            </ul>
          </div>

          <div className="login">
            <img
              src="https://www.starbucks.com.br/public/img/icons/sb-historias-logo.svg"
              className="histt"
            />
            <div className="location">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17/17736.png"
                style={{ height: '24px' }}
              />
              <span>Encontre uma loja</span>
            </div>
            <Button
              className="border border-dark rounded-pill hoverable "
              variant="white"
            >
              Entrar
            </Button>
            <Button
              className="border border- border-dark rounded-pill text text-white hoverable"
              variant="dark"
            >
              Participe Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSchemesExample;
