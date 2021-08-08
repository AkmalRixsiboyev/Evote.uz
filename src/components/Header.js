import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import 'aos/dist/aos.css';
import "aos/dist/aos";
import AOS from "aos";


class Header extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000
        });

    }


    render() {
        return (
            <div>
                <header id={'header'}>
                    <div className="bghead" id={'bg_head'}>
                        <Container>
                            <Row>
                                <Col data-aos="fade-up" md="12" className="d-flex align-items-center">
                                    <div className="head-title">
                                        <h1> ЭЛЕКТРОННОЕ
                                            <br/>
                                            ГОЛОСОВАНИЕ</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div data-aos="fade-up" className="text-head">
                                        Является удобным универсальным инструментом
                                        для голосования,позволяет акционерам регистрироваться
                                        на собраниях и голосовать путем заполнения электронной
                                        формы бюллетеня на сайте
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header