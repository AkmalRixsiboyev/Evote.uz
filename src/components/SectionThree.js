import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';


class SectionThree extends Component {
    render() {
        return (
            <div>
                <Container className="section-3 mt-3">
                    <Row  data-aos="fade-up">
                        <Col md="12" className="d-flex justify-content-center ">
                            <div className="title">
                            АКЦИОНЕРАМ
                            </div>
                        </Col>
                    </Row>
                    <Row  data-aos="fade-up">
                        <Col md="12" className="d-flex">
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <h4>УДОБНО</h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    Вы можете участвовать в Общем собрании акционеров вне зависимости от
                                    удаленности от места его проведения. Необходим только доступ в Интернет
                                    и компьютер, планшет или смартфон.
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <h4>БЫСТРО</h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    Простое письмо доставляется в среднем 10-20 дней. Электронный бюллетень – мгновенно.
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <h4>БЕЗОПАСНО</h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    Голосование осуществляется по закрытым каналам связи, обеспечивающим защиту от изменения содержания документа и подделки подписи.
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row  data-aos="fade-up">
                        <Col md="12" className="d-flex justify-content-center">
                            <div className="document">
                                <a href="/file/document.pdf">Документация</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default SectionThree