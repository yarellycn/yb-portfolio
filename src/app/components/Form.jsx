"use client";

import { notification } from 'antd';
import { useTranslations } from "next-intl";
import { useFormField } from '../hooks/useFormField';
import emailjs from '@emailjs/browser';

function validateUserName(userName) {
    let regexNumbers = /\d/;
    let regexChar = /[!@#$%^&*()\_+={}[\]:;"<>,.?\/|\\]/;

    if (userName.trim().length === 0) {
        return "required";
    }
    if ((regexNumbers.test(userName)) || (regexChar.test(userName))) {
        return "invalidName";
    }
    else return "";
}

function validateEmail(email) {
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length == 0) {
        return "required"
    }
    if (regexEmail.test(email) == false) {
        return "invalidMail"
    }
    else return "";
}

function validateMessage(message) {
    if (message.length == 0) {
        return "required"
    }
    if (message.trim().length < 50) {
        return "shortMessage"
    }
    else return "";
}

const ContactForm = () => {
    const tForm = useTranslations("ContactForm")
    const tErrors = useTranslations("FormErrors")
    const tNotif = useTranslations("FormNotif")

    const lastName = useFormField(validateUserName)
    const firstName = useFormField(validateUserName)
    const email = useFormField(validateEmail)
    const message = useFormField(validateMessage)

    const isFormValid = 
        lastName.error === "" && 
        lastName.value.trim() !== "" &&
        firstName.error === "" && 
        firstName.value.trim() !== "" &&
        email.error === "" && 
        email.value.trim() !== "" &&
        message.error === "" && 
        message.value.trim() !== "";

    const [api, contextHolder] = notification.useNotification();
    
    const openNotificationWithIcon = (type, titleKey, messageKey) => {
        api[type]({
            title: tNotif(titleKey),
            description: tNotif(messageKey)
        });
    };

    function handleSubmit(event) {
        const fields = { firstName, lastName, email, message }
    
        event.preventDefault();
        const formValues = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value
        }
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formValues,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() => {
            openNotificationWithIcon('success', 'successTitle', 'successMessage');
            Object.values(fields).forEach(field => {
                field.reset();
            });
        })
        .catch(() => openNotificationWithIcon('error', 'errorTitle', 'errorMessage'))
    }

    return (
    <div className="formContainer">
        <h2 className="formTitle">{tForm("contactTitle")}</h2>
        <form onSubmit={handleSubmit}>
            {contextHolder}
            <div className="formGrid">
                <div className="formField lastNameField">
                    <label>{tForm("lastName")}<br/>
                        <input
                            type="text"
                            value={lastName.value}
                            onChange={lastName.onChange}
                            placeholder="Berger"
                        />
                    </label><br/>
                </div>
                <div className="formField firstNameField">
                    <label>{tForm("firstName")}<br/>
                        <input
                            type="text"
                            value={firstName.value}
                            onChange={firstName.onChange}
                            placeholder="Yarelly"
                            />
                    </label><br/>
                </div>
                { lastName.error && lastName.touched && <p className="error errorLastName">{tErrors(lastName.error)}</p> }
                { firstName.error && firstName.touched && <p className="error errorFirstName">{tErrors(firstName.error)}</p> }
                <div className="formField emailField">
                    <label>{tForm("email")}<br/>
                        <input
                            type="email"
                            value={email.value}
                            onChange={email.onChange}
                            placeholder={tForm("emailExample")}
                            />
                    </label>
                </div>
                { email.error && email.touched && <p className="error errorEmail">{tErrors(email.error)}</p> }
                <div className="formField messageField">
                    <label>{tForm("message")}<br/>
                        <textarea 
                            value={message.value}
                            onChange={message.onChange}
                            placeholder={tForm("messageExample")}
                            rows={"9"}
                            />
                    </label>
                </div>
                { message.error && message.touched && <p className="error errorMessage">{tErrors(message.error)}</p> }
            </div>
            <button disabled={!isFormValid}>{tForm("submit")}</button>
        </form>
    </div>
    );
    };
export default ContactForm;