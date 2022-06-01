import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <h1>Contact me</h1>

            <form id='contact-form'>


                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' ></input>
                </div>

                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' ></input>
                </div>

                <div>
                    <label htmlFor='message'>Name:</label>
                    <textarea name='message' rows='5' />
                </div>

                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default ContactForm