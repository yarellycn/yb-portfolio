"use client";

import React from 'react';
import { Flex, Space, ConfigProvider } from "antd";
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <Flex justify="center" align="center" vertical className="footer">
            <Space>
                <a
                    href="https://www.linkedin.com/in/yarelly-cotrina-navarro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"
                >
                    <LinkedinOutlined />
                </a>
                <a
                    href="https://github.com/yarellycn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"
                >
                    <GithubOutlined />
                </a>
                <a
                    href="https://instagram.com/yarellycn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"                    
                >
                    <InstagramOutlined />
                </a>
            </Space>
            <Space>
                <p className="footerText">© Yarelly Berger | 2025</p>
            </Space>
        </Flex>
    )
}

export default Footer;