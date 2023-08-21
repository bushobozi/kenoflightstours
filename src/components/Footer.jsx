import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./footer.css";
//import logo from "../logo.jpeg";

const Footer = () => {
  return (
      <div className="footer">
            <div className="footer_container">
                  <div className="footer_container_grid_3">
                        <div className="footer_item">
                              <h1><Link to="/">Keno flight</Link></h1>
                        </div>
                        <div className="footer_item">
                              <h2>email</h2>
                              <h3><a href="#">email_us@gmail.com</a></h3>
                              <h2>whatsapp</h2>
                              <h3><a href="#">+25677123456789</a></h3>
                        </div>
                        <div className="footer_item">
                              <h2>follow us</h2>
                              <h3><a href="#">Facebook</a></h3>
                              <h3><a href="#">Twitter</a></h3>
                              <h3><a href="#">Instagram</a></h3>
                        </div>
                  </div>
                  <div className="copy_r">
                        <p>all right reserved &copy; keno flight - 2023</p>
                  </div>
            </div>
      </div>
  )
}

export default Footer
