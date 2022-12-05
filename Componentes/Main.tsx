import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Carrossel5() {
  return (
    <div className="Alinha">
      <div className="headerAL"></div>
      <Carousel className="banner">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_3871229738_desktop.jpg?crc=30ee0716"
            style={{ width: 1360 }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_195590685_desktop.jpg?crc=7f49f1de"
            style={{ width: 1360 }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_1238876046_desktop.jpg?crc=1d287b13"
            style={{ width: 1360 }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        <div className="bN">
          <span className="span">
            Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde
            e bem-estar de nossos partners e consumidores.
          </span>
        <div>
          <Button className="border border-dark rounded-pill hoverable" variant="white">
            Saiba Mais
          </Button>
        </div>
      </div>
        <div className="Car">
                <Col className="Cols" >
                  <Card className="linha-alg">
                    <Card.Img style={{width:"680px", height:"585px"}} variant="top" src="https://www.starbucks.com.br/public/img/home/sb-dia-do-fotografo.jpg" />
                    <Card.Body>
                        <Card.Title className="span">Voltando ao que amamos juntos</Card.Title>
                        <Card.Text className="span">
                        Queridos clientes, partners e amigos, estamos acompanhando a situação atual do Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos partners (como chamamos os nossos colaboradores) e clientes. Seguimos os critérios de quarentena de cada munícipo que temos lojas. As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi, estão seguindo as orientações das autoridades de saúde.
                        </Card.Text>
                      <Button className="border border-dark rounded-pill hoverable" variant="white">
                      Baixe nosso App e verifique as lojas em funcionamento
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="Cols">
                  <Card className="linha-algR">
                    <Card.Img style={{width:"680px", height:"397px"}} variant="top" src="	https://www.starbucks.com.br/public/img/home/featured-drinks.jpg" />
                    <Card.Body>
                        <Card.Title className="span">Saboreie uma pausa</Card.Title>
                        <Card.Text className="span">
                        Saboreie uma pausa com uma de nossas bebidas
                        </Card.Text>
                      <Button className="border border-dark rounded-pill hoverable" variant="white">
                      Saiba Mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="Cols">
                  <Card className="linha-alg">
                    <Card.Img style={{width:"680px", height:"397px"}} variant="top" src="https://www.starbucks.com.br/public/img/home/donate.jpg" />
                    <Card.Body>
                        <Card.Title className="span">Esperança e união</Card.Title>
                        <Card.Text className="span">
                        Em parceria com ONGs, Partners da Starbucks se mobilizam para entregar café às comunidades.
                        </Card.Text>
                      <Button className="border border-dark rounded-pill hoverable" variant="white">
                      Saiba Mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="Cols">
                  <Card className="linha-algR">
                    <Card.Img style={{width:"680px", height:"397px"}} variant="top" src="https://www.starbucks.com.br/public/img/home/partners.jpg" />
                    <Card.Body>
                        <Card.Title className="span">Coisas boas estão acontecendo</Card.Title>
                        <Card.Text className="span">
                        Um gesto de carinho àqueles que estão na linha de frente todos os dias.
                        </Card.Text>
                      <Button className="border border-dark rounded-pill hoverable" variant="white">
                      Saiba Mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
        </div>
    </div>
  );
}
