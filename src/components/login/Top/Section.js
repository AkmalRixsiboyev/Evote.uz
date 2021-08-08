import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import TabOpen1 from "./TabOpen1";
import TabOpen2 from "./TabOpen2";
import TabOpen3 from "./TabOpen3";


class Section extends Component {

    state={
        myTab:"1",
        active1:"activeTab1",
        active2:"none",
        active3:"none",
    };

    activeTab=(tab)=>{
        this.setState({
            myTab:tab
        })

    };
    activeTab2=()=>{
        if (this.state.myTab==="1"){
            this.setState({
                active1:"activeTab1",
                active2:"none",
                active3:"none",
            })
        }else if (this.state.myTab==="2"){
            this.setState({
                active1:"none",
                active2:"activeTab1",
                active3:"none",
            })
        }else {
            this.setState({
                active1:"none",
                active2:"none",
                active3:"activeTab1",
            })
        }
    };

    render() {
        return (
            <div className="Section">

                <div className="left-content">
                    <h1 data-aos="zoom-in">Авторизация</h1>
                    <Nav tabs>
                        <NavItem className={this.state.active1} onMouseOver={this.activeTab2} onClick={() =>{this.activeTab('1')}}>
                            <Tab1/>
                        </NavItem>
                        <div className="clear"></div>
                        <NavItem className={this.state.active2} onMouseOver={this.activeTab2} onClick={() =>this.activeTab('2')}>
                            <Tab2/>
                        </NavItem>
                        <div className="clear"></div>
                        <NavItem className={this.state.active3} onMouseOver={this.activeTab2} onClick={() =>this.activeTab('3')}>
                            <Tab3/>
                        </NavItem>
                    </Nav>
                </div>


                <div data-aos="flip-right"  className="right-content">
                    <TabContent activeTab={this.state.myTab}>
                        <TabPane tabId="1">
                            <TabOpen1/>
                        </TabPane>
                        <TabPane tabId="2">
                           <TabOpen2/>
                        </TabPane>
                        <TabPane tabId="3">
                           <TabOpen3/>
                        </TabPane>
                    </TabContent>
                </div>

            </div>
        );
    }
}

export default Section;