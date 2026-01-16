"use client";

import React from 'react';
import { Flex, Space } from "antd";
import { useTranslations } from "next-intl";
import Footer from './Footer';
import ContactForm from './Form';

const Contact = () => {
    const t = useTranslations("Contact");

    return (
        <section className="contactContainer">
            <ContactForm />
            <Footer />
        </section>
    )
}

export default Contact;