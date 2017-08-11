/**
 * Created by n7best
 */

"use strict";

import React from 'react';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Page
} from 'react-weui';
import iconSrc from './crown.png';

const CellMore = () => (
    <Cell access link>
        <CellBody>More</CellBody>
        <CellFooter />
    </Cell>
)

export default class PanelDemo extends React.Component {
    render() {
        return (
            <Page className="panel" title="Panel" subTitle="面板">
                <Panel>
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
                
                    <PanelBody>
                        <MediaBox type="text">
                            <MediaBoxTitle>澳喵馆（Multi-Natural Shop）</MediaBoxTitle>
                            <MediaBoxDescription>
                                UGG-1039
                            </MediaBoxDescription>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>日期：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>08/06/2017</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra style={{fontWeight:'bold'}}>积分：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta style={{fontWeight:'bold'}}>+108</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </MediaBox>
                  
                        <MediaBox type="text">
                            <MediaBoxTitle>北方饺子馆（North restaurant）</MediaBoxTitle>
                            <MediaBoxDescription>
                                鱼香肉丝盖饭
                            </MediaBoxDescription>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>日期：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>21/07/2017</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra style={{fontWeight:'bold'}}>积分：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta style={{fontWeight:'bold'}}>+15</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </MediaBox>
                 
                        <MediaBox type="text">
                            <MediaBoxTitle>蜀湘坊（SHUXIANG FANG）</MediaBoxTitle>
                            <MediaBoxDescription>
                                宴席-06
                            </MediaBoxDescription>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>日期：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>04/08/2017</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra style={{fontWeight:'bold'}}>积分：</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta style={{fontWeight:'bold'}}>+200</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </MediaBox>
                    </PanelBody>
                    <PanelFooter href="javascript:void(0);">
                        <CellMore />
                    </PanelFooter>
                </Panel>
            </Page>
        );
    }
};
