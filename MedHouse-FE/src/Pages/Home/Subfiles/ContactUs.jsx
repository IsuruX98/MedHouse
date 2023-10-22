import backVector from  "../../../assets/contact_vector.svg"


function ContactUs() {
  return (
    <div className="contacts sections">
      <img className="back-img" src={backVector} alt="back vector"/>
      <h2 className="heading">Contact Us</h2>

      <form className="contact-form" action="" method="post">

        <div className="firstName">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="First Name" required/>
        </div>

        <div className="lastName">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Last Name" required/>
        </div>

        <div className="tel-num">
          <label htmlFor="telNum">Mobile Number</label>
          <input type="tel" name="telNum" id="telNum" placeholder="Mobile Number" required/>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email"required/>
        </div>

        <div className="message">
          <textarea name="message" id="message" placeholder="Message"></textarea> 
        </div>
        
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ContactUs