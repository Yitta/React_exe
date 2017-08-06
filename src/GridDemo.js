import React from 'react';
import { Grids } from 'react-weui';
import iconSrc from './icon_tabbar.png';
import './react-weui.css'

const data = Array(9).fill({
    icon: <img src={iconSrc}/>,
    label: 'Grid',
    href: 'javascript:;'
})

const GridDemo = (props) => (
        <Grids data={data}/>
);

export default GridDemo;