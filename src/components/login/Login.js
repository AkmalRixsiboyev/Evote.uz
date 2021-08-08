import React, {Component} from 'react';
import 'aos/dist/aos.css';
import "aos/dist/aos"
import AOS from "aos";
import Section from "./Top/Section";
import FooterImg from "./Bottom/FooterImg";
import './global.scss'


class Login extends Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <Section/>
                    <FooterImg/>
                </div>
            </div>
        );
    }
}

export default Login;