"use client";

import React from 'react';
import { Flex, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <Flex justify="center" align="center" vertical className="footer">
            <Space>
                <a
                    href="https://www.linkedin.com/in/yarelly-cotrina-navarro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '30px', fill: "rgba(0, 149, 148, 1)", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"
                >
                    <LinkedinOutlined className="iconSocial" />
                </a>
                <a
                    href="https://github.com/yarellycn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '30px', color: "white", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"
                >
                    <GithubOutlined className="iconSocial" />
                </a>
                <a
                    href="https://instagram.com/yarellycn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '30px', color: "white", display: 'inline-flex', alignItems: 'center' }}
                    className="footerIcon"                    
                >
                    <InstagramOutlined className="iconSocial" />
                </a>
            </Space>
            <Space>
                <p className="footerText">© Yarelly Berger | 2025</p>
            </Space>
        </Flex>
    )
}

export default Footer;