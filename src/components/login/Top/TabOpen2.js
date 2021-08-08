import React, {Component} from 'react';
import TabModal2 from "./TabModal2";
import {Button} from "reactstrap";

class TabOpen2 extends Component {

    state={
        inputPassword:1,
        inputLogin:1,
        inputType:"d-none"
    };
    getValueInput=()=>{
        this.setState({
            inputPassword:document.getElementById('loginpassformUsername').value,
            inputLogin:document.getElementById('loginpassformPassword').value,
        });
        console.log(document.getElementById('loginpassformUsername').value,
            document.getElementById('loginpassformPassword').value)
    };
    getValue=()=>{
        if (this.state.inputPassword==="2" && this.state.inputLogin==="2"){
            this.setState({
                inputType:"d-none"
            })
        }
        else {
            this.setState({
                inputType:"d-block"
            })
        }
    };

    render() {
        return (
            <div className="TabOpen2">
                <form id="w0" className="input_form_auth" action="/site/login/pass" method="post">

                    <h1>Электронное голосование</h1>
                    <p>Для регистрации на площадке<br/>
                        Электронное голосование<br/>
                        <TabModal2/>
                        </p>
                    <input onChange={this.getValueInput} type="text" id="loginpassformUsername" className="form-control"
                           name="LoginPassForm[username]"  autoFocus="" placeholder="ВВЕДИТЕ ЛОГИН"
                           aria-required="true" aria-invalid="true"/>
                    <p className="help-block help-block-error">
                        <div className={this.state.inputType}>Необходимо заполнить
                            «Username».
                        </div>
                    </p>
                    <input onChange={this.getValueInput} type="password" id="loginpassformPassword" className="form-control"
                           name="LoginPassForm[password]"  placeholder="ВВЕДИТЕ ПАРОЛЬ" aria-required="true"/>
                    <p className="help-block help-block-error">
                        <div className={this.state.inputType}>Необходимо заполнить «Password».
                        </div>
                    </p>

                    <input onClick={this.getValue} type="button" className="butdes2" name="auth_to_login2" value="Войти"/>
                </form>
            </div>
        );
    }
}

export default TabOpen2;