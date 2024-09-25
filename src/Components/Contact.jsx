const Contact = () => {
  return (
    <div id='Contact' className='contact-container'>
      <h1>Contact</h1>
      <div className='form-container'>
        <form action=''>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <textarea placeholder='Your Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
