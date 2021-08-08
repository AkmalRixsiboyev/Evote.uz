import React, {Component} from 'react';
import ModalImg3 from "./ModalImg3";
import ModalImg2 from "./ModalImg2";
import ModalImg1 from "./ModalImg1";

class FooterImg extends Component {
    render() {
        return (
            <div className="FooterImg container">
                <h1 data-aos="zoom-in" className="text-center mb-4">Обучающие видео</h1>
                <div className="row">
                    <div className="col-12 mb-4 col-md-4 bg-black justify-content-md-start d-flex justify-content-center align-items-center">
                       <ModalImg1/>
                    </div>
                    <div className="col-12 mb-4 col-md-4 bg-black d-flex justify-content-center align-items-center">
                        <ModalImg2/>
                    </div>
                    <div className="col-12 mb-4 col-md-4 bg-black justify-content-md-end d-flex justify-content-center align-items-center">
                        <ModalImg3/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterImg;