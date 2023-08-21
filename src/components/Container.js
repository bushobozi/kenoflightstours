import React from "react";
import { Link } from "react-router-dom"
import "./container.css";
import "./destinations.css"
import hero from "../heroimage.jpg"
import culture from "../culture.jpeg"
import view from "../view.jpg"
import about from "../about.png"
import serena from "../serena.jpg"
//import video from "../c.mp4"

const Container = () => {
  return (
    <>
      <div className="dest_img_bg-40_hero">
        <div className="introd">
          <div className="introd_item">
            <h1>Explore your favorite places with comform and <span>unlock your travel dreams</span></h1>
          </div>
          <div className="introd_item">
            <div className="link_top">
              <div className="intro_l"><Link to={"/gallery"}>gallery </Link></div>
              <div className="intro_l"><Link to={"/destinations"}>destinations</Link></div>
              <div className="intro_l"><Link to={"/packages"}>packages</Link></div>
              <div className="intro_l"><Link to={""}>book us</Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className="intr_c">
        <div className="intr_c_inner">
          <div className="intr_grid_2">
            <div className="intr_item">
              <h1>unlock your travel dreams with us</h1>
              <Link to="/gallery" className="link_p">view our gallery</Link>
              <br />
              <br />
              <br />
              <img src={serena} alt="serena hotel" />
            </div>
            <div className="intr_item">
              <img src={serena} alt="serena" />
              <h1>explore your favorite places with comfort</h1>
              <br />
              <Link to="/destinations" className="link_p">view all destinations</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="counter_container">
        <div className="counter_countainer_inner_padding_50">
          <div className="counter_grid_4">
            <div className="counter_item">
              <div className="counter_items_grid_2">
                <div className="counter_n">
                  <h1>10</h1>
                </div>
                <div className="counter_d">
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
            <div className="counter_item">
              <div className="counter_items_grid_2">
                <div className="counter_n">
                  <h1>2K+</h1>
                </div>
                <div className="counter_d">
                  <p>Best destinations</p>
                </div>
              </div>
            </div>
            <div className="counter_item">
              <div className="counter_items_grid_2">
                <div className="counter_n">
                  <h1>10K+</h1>
                </div>
                <div className="counter_d">
                  <p>Happy customers</p>
                </div>
              </div>
            </div>
            <div className="counter_item">
              <div className="counter_items_grid_2">
                <div className="counter_n">
                  <h1>4.8</h1>
                </div>
                <div className="counter_d">
                  <p>Overall Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro_tr">
        <div className="intro_tr_padding_50">
          <div className="intro_tr_header">
            <h2 className="intro_h_2">explore now with us</h2>
            <h1 className="intro_h_1">find your dream destination</h1>
            <p className="intro_p">find the perfect travel plan is like finding a hidden treasure
              <br />
              <br />
              <br />
              <Link to="/packages" className="link_p">view all packages</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="intro_p_i_grid">
        <div className="intro_p_i_item">
          <h1>About keno flight</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dummy text of the printing and been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.dummy text of the has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formhumour, or randomised words which don't look even slightly believable. If you are going to use a passage.There are many variations of passages of Lorem Ipsum available slightly believable. If you are going to use a passage</p>
        </div>
        <div className="intro_p_i_item">
          <img src={about} alt="tourists" />
          <img src={culture} alt="culture" />
        </div>
        <div className="intro_p_i_item">
          <img src={hero} alt="hero" />
          <img src={view} alt="view" />
          <img src={serena} alt="serena hotel kampala" className="ser_img" />
        </div>
      </div>
      <div className="dest_img_bg-40"></div>
    </>
  )
}

export default Container
