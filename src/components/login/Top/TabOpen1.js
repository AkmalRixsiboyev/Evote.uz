import React, {Component} from 'react';

class TabOpen1 extends Component {
    render() {
        return (
            <div className="TabOpen1">
                <form method="get" action="">
                    <h1>Электронное голосование</h1>
                    <p>Если у вас есть регистрация на ONE ID,
                        вы можете войти с ее помощью
                        или выбрать другой способ</p>
                    <input type="button"  className="butdes2" name="auth_to_oneid" value="Войти через ONE ID" />
                </form>
            </div>
        );
    }
}

export default TabOpen1;