import React from 'react'

const index = () => {
    return (
        <div className="contact">
      <div className="container">
          <h2 className="contact__text--main">Connect With Us</h2>
          <p className="contact__text--sub">
            We would love to respond to your queries and help you second. <br />
            Feel free to get in touch with us.
          </p>

          <div className="contact__box">
            <div className="contact__box--left">
              <h3> Send your request</h3>
              <form>
                <div className="input__row">
                  <div className="input__group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Jhon Doe" id="name" />
                  </div>
                  <div className="input__group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="+1 1245 45845" id="phone" />
                  </div>
                  <div className="input__group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      placeholder="jhondoe@gmail.com"
                      id="email"
                    />
                  </div>
                  <div className="input__group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="project" id="subject" />
                  </div>
                </div>
                <label>Message</label>
                <textarea rows="5" placeholder="Your Message"></textarea>
                <button className="contact__btn" type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="contact__box--right">
              <h3> Reach us</h3>
              <table>
                <tr>
                  <td> Email</td>
                  <td>contactus@example.com</td>
                </tr>

                <tr>
                  <td> Phone</td>
                  <td>+1 012 345 6789</td>
                </tr>
                <tr>
                  <td> Address</td>
                  <td>
                    #143 Church street,
                    <br /> Lidcomb, Australia
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default index
