import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col md="12" className="d-flex">
                            <div className="text">
                                <div>
                                Государственное Предприятие "Центральный Депозитарий Ценных Бумаг". <br />
                                Все права защищены © 2004-2016. При полном или частичном использовании и цитировании материалов, опубликованных на данном сайте, ссылка на официальный сайт обязательна.
                                </div>
                            </div>
                            <div className="logo-footer">
                                <img className="img-fluid" src="/copyright2.svg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer