import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class TabModal2 extends Component {

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
        <div>
            <a onClick={this.ButToggle} className="text-decoration-none" href="#" id="id-gov-callback">свяжитесь с нами</a>
                <Modal isOpen={this.state.modal}>
                    <div className="modal-body2">
                        <h1 id="status_change_message" className="text-center">
                            Для получения Логина и Пароля обращайтесь по следующему номеру телефона<br/><br/>
                            <p>+998900094488 </p>
                            <p>+998900067744 </p>
                        </h1>
                        <button className="TabModalBut butdes2" onClick={this.ButToggle}>OK</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TabModal2;