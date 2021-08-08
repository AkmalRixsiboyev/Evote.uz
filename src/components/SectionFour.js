import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';


class SectionFour extends Component {
    render() {
        return (
            <div>
                <Container className="section-3 mt-3">
                    <Row>
                        <Col md="12" className="d-flex justify-content-center ">
                            <div  data-aos="fade-up" className="title mt-5 mb-4">
                            ЭМИТЕНТАМ
                            </div>
                        </Col>
                    </Row>
                    <Row  data-aos="fade-up">
                        <Col md="12" className="d-flex">
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <div>Повышение уровня корпоративного</div>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    управления и инвестиционной привлекательности, в том числе за счет соблюдения рекомендаций Кодекса корпоративного управления.
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <div>Повышение вовлеченности владельцев</div>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    ценных бумаг в процесс голосования и, соответственно, повышение их активности в управлении обществом.
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <div>Получение в режиме реального времени</div>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    информации о результатах голосования и возможность онлайн-общения с владельцами ценных бумаг.
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row  data-aos="fade-up" className="mt-5 mb-4">
                    <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <div>Ускорение процесса обработки и</div>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    подсчета голосов.
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="d-flex"> 
                                    <img className="img-fluid" src="/check-mark.png" alt=""/>
                                    <div>Предпосылки для сокращения затрат на</div>
                                </CardHeader>
                                <CardBody>
                                    <div className="text">
                                    почтовые рассылки.
                                    </div>
                                </CardBody>
                            </Card>
                    </Row>
                    <Row  data-aos="fade-up">
                        <Col md="12" className="d-flex justify-content-center mb-4">
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
export default SectionFour