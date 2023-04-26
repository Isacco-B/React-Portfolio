import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
      </div>
      <div className="form-container">
        <form
          action="https://formsubmit.co/05ef7653c25368a1491fd28add55ef08"
          method="POST"
        >
          <label>NAME</label>
          <input type="text" placeholder="Your Name" name="name" required />
          <label>EMAIL</label>
          <input type="email" placeholder="E-Mail" name="email" required />
          <label>MESSAGE</label>
          <textarea
            cols="20"
            rows="6"
            placeholder="Type Your Message"
            name="message"
            required
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.isaccobertoli.com/thxpage/"
          />
          <input className="send-btn" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
 export default Contact

