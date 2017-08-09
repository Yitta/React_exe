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
                    <PanelBody>
                        <MediaBox type="text">
                            <MediaBoxTitle>Transaction 1</MediaBoxTitle>
                            <MediaBoxDescription>
                            <h4>Detail: </h4><br />
                            <p>date: 07/08/2017</p>
                           <p> amount: 20</p>
                            </MediaBoxDescription>
                        </MediaBox>
                        <MediaBox type="text">
                            <MediaBoxTitle>Transaction 2</MediaBoxTitle>
                            <MediaBoxDescription>
                            <h4>Detail: </h4><br />
                            <p>date: 09/08/2017</p>
                            <p>amount: 15</p>
                            </MediaBoxDescription>
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
