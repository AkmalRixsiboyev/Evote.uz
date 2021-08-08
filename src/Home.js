import React, { Component } from 'react'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'



class Home extends Component {
    render() {
        
        return (
            <div>
                <Header/>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <Footer/>
            </div>
        )
    }
}
export default Home;