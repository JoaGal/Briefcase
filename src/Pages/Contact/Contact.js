import React, { useRef } from 'react';
import './Contact.css';
import { MdPlace, MdEmail, MdLocalPhone } from 'react-icons/md';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    const form = useRef();

    const handleSubmit = (e) => {
        if (name.current.value.length >= 5 &&
            email.current.value.length >= 10 &&
            message.current.value.length >= 10
            ) {

            emailjs.sendForm('service_n8uruzc', 'template_1e6lq61', form.current, '0X9jHOM3v2U7vNPrn')
                .then((result) => {
                    console.log(result.text);
                    alert('Message Send');

                }, (error) => {
                    console.log(error.text);
                    alert('Message Not Send');
                });
                e.preventDefault();

        } else {

            e.preventDefault();
            alert('Message Not Send');
        }
    };

    return (
        <div className='container-contact'>
            <div className="container">
                <div className='section-title'>
                    <p className='contact-subtitle'>get in touch</p>
                    <h2 className='contact-title'>Contact</h2>
                </div>
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="contactSection__wrapper">
                        <div className="left">
                            <div className='contact__boxItem'>
                                <div className="contact__icon"><MdLocalPhone /></div>
                                <div className="contact__info">
                                    <p className='p-text'>+3624712344</p>
                                </div>
                            </div>
                            <div className='contact__boxItem'>
                                <div className="contact__icon"><MdEmail /></div>
                                <div className="contact__info">
                                    <p className='p-text'>joaquingaldeano7@gmail.com</p>
                                </div>
                            </div>
                            <div className='contact__boxItem'>
                                <div className="contact__icon"><MdPlace /></div>
                                <div className="contact__info">
                                    <p className='p-text'>Chaco, Argentina</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className='contact-form'>
                                <div className="form-group">
                                    <label htmlFor="name" className='contact-label'>
                                        Your Name
                                        <input
                                            className='input-textarea'
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            ref={name}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className='contact-label'>
                                        Your Email
                                        <input
                                            className='input-textarea'
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            ref={email}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className='contact-label'>
                                        Your message
                                        <textarea
                                            className='input-textarea'
                                            type="text"
                                            id="message"
                                            name="message"
                                            ref={message}
                                        />
                                    </label>
                                </div>
                                <button type="submit" className='contact-button'>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
