"use client";

import React from 'react';
import { Row, Space } from "antd";

const Splitter = () => {
    return (
        <Row justify="space-around" align="center" className="splitter">
            <Space className="splitterContent">
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
                <img src="/dot-splitter.png" className="dotSplitter"/>
            </Space>
        </Row>
    )
}

export default Splitter;