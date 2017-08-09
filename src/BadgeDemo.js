import React from 'react';
import {
    Badge, Cells, Cell, CellBody, CellFooter, CellHeader, CellsTitle,Page
} from 'react-weui';
import iconSrc from './icon_tabbar.png';

const BadgeDemo = (props) => (
    <Page className="cell" title="Personal Page">
        <CellsTitle>Personal Page</CellsTitle>
        <Cells>
            <Cell>
                <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                    <img src={iconSrc} style={{width: '50px', display: 'block'}} />
                    <Badge preset="header">8</Badge>
                </CellHeader>
                <CellBody>
                    <p>Contact Name</p>
                    <p style={{fontSize: '13px', color: '#888888'}}>Descriptions</p>
                </CellBody>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter>
                    Details
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">new</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
        </Cells>
    </Page>
);

export default BadgeDemo;