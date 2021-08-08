import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import 'aos/dist/aos.css';
import "aos/dist/aos"
import AOS from "aos";



class SectionTwo extends Component {
    componentDidMount() {
        AOS.init({
            duration : 1000
        });
    }
    render() {
        return (
            <div>
                <Container className="section-2">
                    <Row>
                        <Col md="12">
                            <div  data-aos="fade-up" className="title">
                                <h1><b>ОСНОВНЫЕ ОСОБЕННОСТИ</b> НАШЕГО СЕРВИСА</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="cards">
                        <div  data-aos="fade-up" className="card1">
                            <h6>
                            Возможность для акционеров/членов наблюдательных советов голосовать 
                        на Общих собраниях акционеров/заседаниях наблюдательных советов, используя 
                        единый интерфейс и единую процедуру идентификации.
                            </h6>
                        </div>
                        <div data-aos="fade-up" className="card2">
                            <h6>
                            Возможность идентификации пользователей с использованием уже имеющихся у 
                        них средств идентификации, без дополнительной необходимости личной явки.
                            </h6>
                        </div>
                        <div data-aos="fade-up" className="card3">
                            <h6>
                            Возможность «брендирования» страницы собрания с использованием вашего логотипа и фирменного цвета эмитента
                            </h6>
                        </div>
                        <div data-aos="fade-up" className="card4">
                                <h6>
                                Возможность выбора необходимых сервисов.
                                </h6>
                        </div>
                        <div data-aos="fade-up" className="card5">
                            <h6>
                            Возможность голосования как через общий портал, так и по прямой ссылке на собрание/заседание, на котором вы хотите проголосовать.
                            </h6>
                        </div>
                        <div data-aos="fade-up" className="card6">
                                <h6>
                                Использование защищенных каналов связи, обеспечивающих защиту от изменения содержания документа и подделки подписи.
                                </h6>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SectionTwo