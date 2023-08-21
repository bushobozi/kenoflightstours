import React from "react";
import "./destinations.css"
import "./gallery.css"
import lakes from "../lakes.jpg"
import heroimage from "../heroimage.jpg"
import culture from "../culture.jpeg"
import womandancing from "../womandancing.jpeg"
import giraffe from "../giraffes.jpeg"
import lions from "../lions.jpeg"
import serena from "../serena.jpg"
import tent from "../tent.png"


const Galleries = () => {
  return (
    <div className="galery_container">
      <div className="dest_img_bg-40">
            <div className="introd">
                  <div className="introd_item">
                        <h1>View Our Gallery</h1>
                  </div>
            </div>
      </div>
      <div className="galery_img_grid">
            <div className="galery_img_item">
                  <img src={lakes} alt="lakes" />
                  <img src={culture} alt="imbalu dance" />
                  <img src={giraffe} alt="giraffes grazing" />
            </div>
            <div className="galery_img_item">
                  <img src={heroimage} alt="hero image" />
                  <img src={womandancing} alt="woman dancing runyenge dance" />
                  <img src={lions}  alt="lions" />
            </div>
      </div>
      <div className="galery_img_item">
            <p>Travel Experiences That Enrich lives & culture</p>
            <img src={serena} alt="serena hotel" />
      </div>
      <div className="gallerY_bo">
            <div className="galerY_bo_container">
                  <div className="dest_container_grid_two">
                                <div className="cont_grid_thr_i">
                                      <div className="dest_nam_p">
                                            <h1>top locations and hubs</h1>
                                            <img src={tent} />
                                      </div>
                                      <div>
                                            <h1 className="h_pack">Discounts</h1>
                                            <h1 className="h_pack_3">10%</h1>
                                      </div>
                                </div>
                                <div className="cont_grid_thr_i">
                                      <div className="package_grid">
                                            <div className="package_item">
                                                  <div className="dest_container_img_bg">
                                                        <img src={lakes} alt="" className="d_bg" />
                                                  </div>
                                                  <div className="desT_links_p">
                                                        <p><a href="#">book a trip</a></p>
                                                  </div>
                                                  <div className="dest_des_p">
                                                        <h1 className="h_pack">Kampala serena</h1>
                                                        <div className="rate_s">
                                                              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                                        </div>
                                                        <h1 className="h_pack_2">10% discount $220 per night</h1>
                                                  </div>
                                            </div>
                                            <div className="package_item">
                                                  <div className="dest_container_img_bg">
                                                        <img src={lakes} alt="" className="d_bg" />
                                                  </div>
                                                  <div className="desT_links_p">
                                                        <p><a href="#">book a trip</a></p>
                                                  </div>
                                                  <div className="dest_des_p">
                                                        <h1 className="h_pack">Kampala serena</h1>
                                                        <div className="rate_s">
                                                              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                                        </div>
                                                        <h1 className="h_pack_2">10% discount $220 per night</h1>
                                                  </div>
                                            </div>
                                      </div>
                                      <div className="package_grid">
                                            <div className="package_item">
                                                  <div className="dest_container_img_bg">
                                                        <img src={lakes} alt="" className="d_bg" />
                                                  </div>
                                                  <div className="desT_links_p">
                                                        <p><a href="#">book a trip</a></p>
                                                  </div>
                                                  <div className="dest_des_p">
                                                        <h1 className="h_pack">Kampala serena</h1>
                                                        <div className="rate_s">
                                                              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                                        </div>
                                                        <h1 className="h_pack_2">10% discount $220 per night</h1>
                                                  </div>
                                            </div>
                                            <div className="package_item">
                                                  <div className="dest_container_img_bg">
                                                        <img src={lakes} alt="" className="d_bg" />
                                                  </div>
                                                  <div className="desT_links_p">
                                                        <p><a href="#">book a trip</a></p>
                                                  </div>
                                                  <div className="dest_des_p">
                                                        <h1 className="h_pack">Kampala serena</h1>
                                                        <div className="rate_s">
                                                              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                                        </div>
                                                        <h1 className="h_pack_2">10% discount $220 per night</h1>
                                                  </div>
                                            </div>
                                      </div>
                                </div>
                  </div>
            </div>            
      </div>
      <div className="dest_img_bg-40"></div>
    </div>
  )
}

export default Galleries
