import React, {Component} from 'react';
import {  Modal } from 'reactstrap';
import  MImg1 from '../img/rasm1.jpg'
class ModalImg1 extends Component {

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
                <img onClick={this.ButToggle} className="preview-image" src={MImg1} alt=""/>
                <Modal isOpen={this.state.modal}>
                    <div className="modal-body2 p-0">
                        <iframe className="video" src="https://www.youtube.com/embed/lvkX6pqtAfE" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                    </div>
                    <button className="TabModalBut position-relative butdes2" onClick={this.ButToggle}>OK</button>
                </Modal>
            </div>
        );
    }
}

export default ModalImg1;