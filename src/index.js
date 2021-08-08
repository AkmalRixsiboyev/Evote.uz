import ReactDom from 'react-dom'
import App from "./components/App";
import './global.scss'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDom.render(
   <App/>,
    document.getElementById('root')
)