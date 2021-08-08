import React, {Component} from 'react';
import MImg3 from '../img/rasm3.jpg'
import {  Modal } from 'reactstrap';
class ModalImg3 extends Component {

    state={
        modal:false
    };
    ButToggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    };

    render() {
        return (
            <div className="ModalImg3">
                <img onClick={this.ButToggle} className="preview-image" src={MImg3} alt=""/>
                <Modal isOpen={this.state.modal}>
                    <div className="modal-body2 p-0">
                        <iframe className="video" src="https://www.youtube.com/embed/wVuO9o7ril8" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                    </div>
                    <button className="TabModalBut position-relative butdes2" onClick={this.ButToggle}>OK</button>
                </Modal>
            </div>
        );
    }
}

export default ModalImg3;