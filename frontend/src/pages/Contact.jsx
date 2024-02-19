import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dxgiqro', 'template_rdc19cl', formRef.current, '5F7xXkybMqUC7QvD1')
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); // Set submitted state to true
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='pt-[160px]'>
      <div className='container'>
        <div className='px-4 mx-auto max-w-screen-md '>
          <h2 className='heading text-center '>Contact Us</h2>
          <p className='mb-8 mt-2 lg:mb-16 font-semibold  text-primaryColor text-center '>
            Questions, bug reports, feedback - we're here for it all.
          </p>

         

          <form onSubmit={sendEmail} className='space-y-8 mt-1 hero__section' ref={formRef}>
            <div>
              <label htmlFor='email' className='form__label'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='from_email'
                placeholder='example@gmail.com'
                className='form__input mt-1'
              />
            </div>
            <div>
              <label htmlFor='subject' className='form__label'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                placeholder='Let us know how we can help you'
                className='form__input mt-1'
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='form__label'>
                Your Message
              </label>
              <textarea
                name='message'
                rows='6'
                id='message'
                placeholder='Leave a comment...'
                className='form__input mt-1'
              />
            </div>
            <button type='submit' className='btn rounded sm:w-fit'>
              Submit
            </button>
            {submitted ? (
            <div className="text-green-500 text-left mb-4">Successfully submitted!</div>
          ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


