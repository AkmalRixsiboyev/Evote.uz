import React, {useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem, DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown,

} from 'reactstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import logo from '../img/lgo.png'
import Pley from '../img/pley.png'
import Home from "../Home";
import Login from "./login/Login";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const [infoV, setInfoV] = useState(true)

	function infoVideoBtn() {
		setInfoV(false)
	}

	function infoVideoBtn2() {
		setInfoV(true)
	}

	return (
		<div className="sticky-md-top sticky-nav">
			<Router>
				<div className="container">
					<Navbar className={'mt-lg-0 mt-3 py-lg-0  py-2 p-0'} color="white" light expand="lg">
						<Link onClick={infoVideoBtn2} to={'/'} className={'text-dark text-decoration-none  '}>
							<div className={'d-flex  align-items-md-center '}>
								<img src={logo} width={70} alt=''/> <span className={' fs-7 '}>    Центральный депозитарий <br/>
                        ценных бумаг </span>
							</div>

							<h5 className={'my-0 fs d-lg-block d-none'}>Электронное голосование</h5>
						</Link>

						<NavbarToggler onClick={toggle}/>
						<Collapse className={'justify-content-md-between'} isOpen={isOpen} navbar>
							<NavItem className={'btn p-0 border-0 border-02'}>
								<Link
									className={'btn btn-primaryy h-100 text-white py-4 px-4 rounded-0 fs  d-lg-block  ms-2 d-none start-btn'}
									to={"/site/login"}>Начать <img
									src={Pley} alt=""/> </Link>
							</NavItem>
							<Nav className="mr-auto justify-content-end " navbar>
								<NavItem className={'btn  d-lg-none border-0  '}>
									<Link
										className={'btn btn-primaryy w-75 text-white py-3 px-4 rounded-pill   fs-5 py-xl-4 py-xl-4 px-xl-4 py-lg-3 px-lg-3 py-md-3 px-md-3'}
										to={"/site/login"}>Начать <img
										src={Pley} alt=""/> </Link>
								</NavItem>

								{infoV ? <div
									className="   d-md-flex align-items-md-center  d-block justify-content-center  ">
									<NavItem className={'btn p-0 d-block border-0 border-02'}>
										<a className={'text-dark text-decoration-none d-block py-4 px-4  rounded-0 hover fs py-xl-4 py-xl-4 px-xl-4 py-lg-4 px-lg-3 py-md-3 px-md-3'}
										   href="http://www.deponet.uz/">О депозитарии</a>
									</NavItem>
									<NavItem className={'btn p-0 d-block border-0  border-02 '}>
										<a href="/file/document.pdf"
										   className="text-dark border-0r text-decoration-none d-block py-4 px-4 rounded-0   fs hover py-xl-4 px-xl-4  py-lg-4 px-lg-3 py-md-3 px-md-3">
											Документация</a>
									</NavItem>
									<NavItem className={'btn p-0  d-block border-0  border-02 '}>
										<Link onClick={infoVideoBtn}
										      className={'border-0r text-dark text-decoration-none d-block  py-4 px-4   fs rounded-0 hover py-xl-4 px-xl-4  py-lg-4 px-lg-3 py-md-3 px-md-3'}
										      to={"/site/info"}>Обучающее видео</Link>
									</NavItem>
								</div> : <div className="   d-flex justify-content-center  ">


									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											<img className="img-fluid user-logo" src="/user.png" alt=""/> Профиль
										</DropdownToggle>
										<DropdownMenu className={'w-autoo'}>
											<DropdownItem className={'ps-2'}>

												<Link
													className={'text-dark text-decoration-none d-block     fs rounded-0  '}
													to={"/site/info"}>Редактировать</Link>
											</DropdownItem>
											<DropdownItem className={'ps-2'}>

												<Link onClick={infoVideoBtn2}
												      className={'text-dark text-decoration-none d-block     fs rounded-0  '}
												      to={"/"}> Выйти</Link>
											</DropdownItem>


										</DropdownMenu>
									</UncontrolledDropdown>

								</div>}

							</Nav>

						</Collapse>
					</Navbar>
				</div>
				<div>
					{/* Componetani   paska  Route joyga chaqiriladi */}
					<Switch>
						<Route path="/site/login">
							<Login/>
						</Route>
						<Route path="/site/info">

						</Route>
						<Route path="/profile">

						</Route>
						<Route path="/">
							<Home/>
						</Route>
					</Switch>
				</div>

			</Router>
		</div>

	);
}

export default App;