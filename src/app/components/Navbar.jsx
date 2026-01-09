"use client";
import React from 'react';
import { Row, Space, Button, ConfigProvider } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const items = [
  {
    key: 'fr',
    label: 'FR',
  },
  {
    key: 'en',
    label: 'EN',
  },
  {
    key: 'es',
    label: 'ES',
  },
];

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("Navbar");

    const handleLanguageChange = ({ key }) => {
        // Remove current locale from path
        const segments = pathname.split("/");
        segments[1] = key; // replace locale
        router.push(segments.join("/"));
  };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        contentFontSize: 14.5,
                        textHoverBg: "rgba(5, 212, 244, 1)",
                    },
                },
            }}
            >
            <Row justify="end" align="center" className="navBar">
                <Space align="center">
                    <Button type="text" className="navbarButton">{t("aboutButton")}</Button>
                    <Button type="text" className="navbarButton">{t("projectsButton")}</Button>
                    <Button type="text" className="navbarButton">{t("contactButton")}</Button>
                    <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                            onClick: handleLanguageChange,
                        }}
                    >
                        <Typography.Link>
                            <Space className="navbarButton">
                                {locale.toUpperCase()}
                                <DownOutlined/>
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </Space>
            </Row>
        </ConfigProvider>
    )
}

export default NavBar;