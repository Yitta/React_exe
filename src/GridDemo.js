import React from 'react';
import { Grids, Button, ButtonArea, Cell, CellBody, CellHeader, CellFooter, Flex, FlexItem, Page } from 'react-weui';
import iconSrc from './crown.png';
import './react-weui.css'
import UserPanel from './UserPanel';


const m = [{
    label: '1',
    href: 'javascript:;'
},
{
    label: '2',
    href: 'javascript:;'
},{
    label: '3',
    href: 'javascript:;'
},{
    label: '4',
    href: 'javascript:;'
},{
    label: '5',
    href: 'javascript:;'
},{
    label: '6',
    href: 'javascript:;'
},{
    label: '7',
    href: 'javascript:;'
},{
    label: '8',
    href: 'javascript:;'
},{
    label: '9',
    href: 'javascript:;'
},{
    label: '.',
    href: 'javascript:;'
},{
    label: '0',
    href: 'javascript:;'
},{
    label: '+',
    href: 'javascript:;'
}]

const data = Array.from(m)

const GridDemo = (props) => (
	<div>
	<UserPanel>
	    <div className="flex" spacing>
	        <Flex>
	            <FlexItem>
	                <div  style={{fontSize: '30'}}>请输入消费金额:</div>
	            </FlexItem>
	        </Flex>
	        <Flex>
	            <FlexItem>
	                <div id="calc" style={{fontSize: '30', float: "right"}}>0</div>
	            </FlexItem>
	        </Flex>
	    </div>
	  </UserPanel>
        <Grids data={data}/>
        <Cell>
	        <CellHeader>
	            <img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
	        </CellHeader>
	        <CellBody>
	            我的积分：
	        </CellBody>
	        <CellFooter>
	            323
	        </CellFooter>
	    </Cell>
	    <Cell>
            <CellBody>
                可抵扣金额：
            </CellBody>
            <CellFooter>
                32.3
            </CellFooter>
        </Cell>
        <ButtonArea direction="horizontal">
                    <Button>积分抵扣</Button>
                    <Button type="warn">支付</Button>
        </ButtonArea>
    </div>
);

export default GridDemo;