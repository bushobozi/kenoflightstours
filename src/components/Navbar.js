import React, { useState } from "react";
import  { Link, useMatch, useResolvedPath } from "react-router-dom"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// useMatch hook helps us compare content in a web app
// useResolvedPath hook allows actual path to the component -- absolute path
import logo from "../logo.jpeg"

const Menu = () => (
      <>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/destinations">Destinations</CustomLink>
            <CustomLink to="/packages">Packages</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
      </>
)
export default function Navbar() {
      const [toggleMenu, setToggleMenu] = useState(false);
      return (
            <div>
                  <div className="site-title">
                        <Link to="/" className="logo" >Keno</Link>
                        {/*<img src={logo} alt="logo" />*/}
                  </div>
                  <nav className="nav">
                        <img src={logo} alt="logo" />
                        <ul>
                              <Menu />
                        </ul>
                        <div className="socials_ri">
                              <a href="#">WhatsApp 077123456789</a>
                              <a href="#">Email Us</a>
                        </div>
                  </nav>
                  <div className="toggle_menu">
                        {toggleMenu
                              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />

                        }
                        {
                        toggleMenu && (
                              <div className="toggle_nav">
                                    <div className="nav-links">
                                                <Menu />
                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </div>
      )
}

function CustomLink({ to, children, ...props}) {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true})
      return (
            <li className={isActive ? "active" : ""}>
                  <Link to={to} {...props}>
                        {children}
                  </Link>
            </li>
      )
}