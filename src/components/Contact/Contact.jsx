import React, { useState } from 'react';
import { validateEmail } from '../../assets/utils/helpers';


function ContactForm() {
    const [ formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [ errorMessage, setErrorMessage ] = useState('');
    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Email is invalid');
            } else {
                if(!event.target.value.length) {
                    console.log("length is zero", event.target.value.length === 0)
                    setErrorMessage(`${event.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if(event.target.name ==='name') {
            if(!event.target.value.length) {
                console.log("length is zero", event.target.value.length === 0)
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 datatest-id='contact'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name='message' rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="submitButton" className='btn btn-primary btn-lg'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;