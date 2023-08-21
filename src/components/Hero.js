import React from "react";
import heroimage from "../heroimage.jpg";
import view from "../view.jpg";
import "./hero.css";

const Hero = () => {
  return (
        <div className='hero__sect'>
              <div className='hero__sect__grid-col-2'>
                    <div className='hero__sect__item_one'>
                          <h1>Seek<br />to find</h1>
                          <img src={heroimage} alt='hero' />
                          <div className='hero__button__cta'>
                                {/* <button link to='/'>be adventourus come with us &#x27BA;</button> */}
                          </div>
                    </div>
                    <div className='hero__sect__item_two'>
                          <p>All the best lies beyond the border, come lets lead your to fun, relaxation and education</p>
                          <img src={view} alt='hero' />
                    </div>
              </div>
        </div>
  )
}

export default Hero
