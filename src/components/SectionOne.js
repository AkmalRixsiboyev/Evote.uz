import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import 'aos/dist/aos.css';
import "aos/dist/aos"
import AOS from "aos";




class SectionOne extends Component {
    componentDidMount() {
        AOS.init({
            duration : 1000
        });
    }
    change(option){
        localStorage.setItem('lang', option.target.value);
        window.location.reload();
    }


    render() {
        const   lang = localStorage.getItem('lang')||'russian';
        return (
            <div>
                <Container className="section-one pt-5">
                    <Row>
                        <Col md="12">
                            <div data-aos="fade-up" className="title">
                                <h1>ЭЛЕКТРОННОЕ ГОЛОСОВАНИЕ</h1>
                            </div>
                            <div data-aos="fade-up" className="select">
                                <select name="language" id="language" onChange={this.change} value={lang}>
                                    <option value="russian">Русский</option>
                                    <option value="english">English</option>
                                </select>
                            </div>
                            <div data-aos="fade-up" className="text">
                                <p>
                                Сервис Электронное голосование является удобным универсальным инструментом для голосования, который 
                                позволяет акционерам/членам наблюдательного совета регистрироваться на собраниях/заседаниях и голосовать
                                путем заполнения электронной формы бюллетеня на сайте, наблюдать за веб-трансляцией собрания/заседания,
                                знакомиться с повесткой дня и материалами собрания/заседания, поддерживать онлайн-связь с эмитентом,
                                используя единый интерфейс и удаленную идентификацию с помощью подтвержденной учетной записи на Портале 
                                госуслуг (ЕСИА). Для доступа к E-voting не требуются специальные 
                                технические средства, подключение к платформе возможно из любой точки мира при наличии сети Интернет.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default  SectionOne
