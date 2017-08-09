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


import IconButton from './icon_nav_cell.png';
import IconMsg from './icon_nav_msg.png';
import IconArticle from './icon_nav_article.png';

export default class TabBarAutoDemo extends React.Component {
    render() {
        return (
          <div className="user1">
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="Tab1">
                    <Article>
                        <h1>Page 1</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>1.1 Title</h3>
                                <Button>hello</Button>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="Tab2">
                    <div className="grid">
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <div className="user2">
                                <GridDemo />
                                </div>
                            </section>
                        </section>
                    </div>
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="Tab3">
                    <div>
                        <h1>Personal Page</h1>
                        <section>
                            <h2 className="title">transactions</h2>
                                <BadgeDemo />
                        </section>
                    </div>
                </TabBarItem>
            </Tab>
          </div>
        );
    }
};
