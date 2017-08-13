import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article,Button, Page} from 'react-weui'
import 'weui';
import './react-weui.css';
import GridDemo from './GridDemo';
import BadgeDemo from './BadgeDemo';
import PanelDemo from './PanelDemo';
import MapContainer from './MapContainer';
import AccountPanel from './Account';

import IconButton from './icon_nav_cell.png';
import IconMsg from './icon_nav_msg.png';
import IconArticle from './icon_nav_article.png';

export default class TabBarAutoDemo extends React.Component {
    render() {
        return (
          <div className="user1">
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="Map">
                    <div className="grid">
                        <MapContainer />      
                    </div>
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="Account">
                    <div>
                        <section>
                                <AccountPanel />
                                <PanelDemo />
                        </section>
                    </div>
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="Calc">
                    <div>
                        <section>
                            <GridDemo />    
                        </section>
                    </div>
                </TabBarItem>
            </Tab>
          </div>
        );
    }
};
