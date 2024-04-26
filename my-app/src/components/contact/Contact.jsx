import React from 'react'
import './Contact.css'

const Contact = () => {

  /* Script obtained from Web3 forms.
     Can receive 250 form submissions per month for free. */
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    /* access key corresponds to Josh P.'s email */
    formData.append("access_key", "55dd8a16-cedd-4a9a-b71c-43f1f83c9f2a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out to us through the provided contact form or our
          contact information listed below. We want our platform to serve the
          Wheaton community as best as we can and any feedback to improve our
          service is always appreciated.</p>
        <h3>Our team</h3>
        <ul>
          <li>
            Benjamin Adamson: benjamin.adamson@my.wheaton.edu
          </li>
          <li>
            Luke Bilhorn: luke.bilhorn@my.wheaton.edu
          </li>
          <li>
            Josh Piazza: josh.piazza@my.wheaton.edu
          </li>
          <li>
            Josh Schuurman: josh.schuurman@my.wheaton.edu
          </li>
          <li>
            Ziling Zhong: ziling.zhong@my.wheaton.edu
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>
            Your name
          </label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>
            Email address
          </label>
          <input type="text" name="email" placeholder="Enter your email address" required/>
          <label>
            Write your message here
          </label>
          <textarea name="message" rows="6" placeholder="Enter your thoughts" required/>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact