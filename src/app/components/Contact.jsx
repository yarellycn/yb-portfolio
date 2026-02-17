"use client";

import React from 'react';
import { useTranslations } from "next-intl";
import Footer from './Footer';
import ContactForm from './ContactForm';

const Contact = () => {
    const t = useTranslations("Contact");

    return (
        <section className="contact">
            {/* <img src="contact/contact-deco.png" className="contactDeco"/> */}
            <ContactForm />
            <Footer />
        </section>
    )
}

export default Contact;