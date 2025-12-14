import React from 'react'

const Contact = () => {

  const handleFormSubmit = (form) => {
    const formInputData = Object.fromEntries(form.entries());
    console.log(formInputData);
  }

  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>

      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            className='form-control'
            type="text"
            required
            autoComplete='of'
            placeholder='Enter your Name'
            name='username'
          />

          <input
            className='form-control'
            type="email"
            required
            autoComplete='of'
            placeholder='Enter your Email'
            name='email'
          />

          <textarea
            className='form-control'
            rows="10"
            type="text"
            required
            autoComplete='of'
            placeholder='Enter your Massage'
            name='massage'
          ></textarea>
          <button type='submit' value="Send">Send</button>
        </form>
      </div>

    </section>
  )
}

export default Contact