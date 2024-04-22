import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Saurav kumar</h4>
            <p>© {year} Team All rights reserved</p>
            <p className='d-flex'>
            <a href="https://www.instagram.com/saurav_singh_22_/" target="_blank" rel="noopener noreferrer">
                  <i class='fa-brands fa-instagram mx-1'></i>
            </a>
              <i className='fa-brands fa-facebook mx-2'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>CONTACT US FOR VARIOUS  INQUIRIES.</p>
            <p>saurav.kumar_cs21@gla.ac.in</p>
            <p>ashutosh.singh1_c21@gla.ac.in</p>
            <p>+91 9576058858</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer