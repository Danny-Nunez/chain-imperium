import React, { useState } from 'react';
import Split from '../Split';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactWithMap = ({ theme = "dark" }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value) {
      setEmailError('Please enter your email');
    } else if (!emailPattern.test(e.target.value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (!e.target.value) {
      setMessageError('Please enter a message');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      const formData = {};
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Thank you for contacting us!');
    } else {
      setNameError(name ? '' : 'Please enter your name');
      setEmailError(email ? '' : 'Please enter your email');
      setMessageError(message ? '' : 'Please enter a message');
    }
  };
  
  return (
    <>
    <ToastContainer 
    position="bottom-center"
    theme="dark"
    autoClose={8000} 
    />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <form onSubmit={handleSubmit}>
                  <p>
                    <label className="labels" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <p className="error">{nameError}</p>
                  </p>
                  <p>
                    <label className="labels" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <p className="error">{emailError}</p>
                  </p>

                  <p>
                    <label className="labels" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
                    />
                    <p className="error">{messageError}</p>
                  </p>
                  <p>
              <button type="submit" className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'} disabled`}><span>Submit</span></button>
            </p>
          </form>               

              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">admin@chainimperium.com</a>
                  </h5>
                  <h5>443.565.7678</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                  Tysons Corner  8609 Westwood Center Dr Suite 110,
                    <br />
                    Tysons Corner, VA 22182
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.801130117092!2d-77.24942252367352!3d38.92852274486647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a5de7880897%3A0x1ed3ec6fad50d9fe!2s8609%20Westwood%20Center%20Dr%20%23110%2C%20Vienna%2C%20VA%2022182!5e0!3m2!1sen!2sus!4v1682700469660!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2023, Chain Imperium.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
