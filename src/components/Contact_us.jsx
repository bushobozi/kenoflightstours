import React from "react"
import "./destinations.css"
import "./contact.css"

const Contact_us = () => {
  return (
    <div className="contact_container">
      <div className="dest_img_bg-40">
        <div className="introd">
          <div className="introd_item">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact_container_inner">
            <div className="contact_container_inner_grid">
                  <div className="contact_container_inner_grid_item">
                      <h1>contact us</h1>
                      <p>
                          create transformative travel experiences that enrich the lives of our clients, foster cultural understaandis and controbute to the conservation of the wolrd's wonders
                      </p>
                  </div>
                  <div className="contact_container_inner_grid_item">
                      <h2>Whatsapp +2567712345649</h2>
                      <h2>Phone +2567712345649</h2>
                      <h2>Email email_us@gmail.com</h2>
                  </div>
            </div>
      </div>
      <div className="dest_img_bg-40"></div>
    </div>
  )
}

export default Contact_us
