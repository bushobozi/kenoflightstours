import React from "react";
import "./destinations.css";
//import tour from "../tour.mp4"
import beach from "../beach.png"
import tent from "../tent.png"
import travel from "../travel.png"

const AboutPage = () => {
      return (
            <div className="dest_container">
                  <div className="dest_img_bg-40">
                        <div className="introd">
                              <div className="introd_item">
                                    <h1>About Us</h1>
                              </div>
                        </div>
                  </div>
                  <div className="dest_container_grid_two">
                        <div className="cont_grid_thr_i">
                              <div className="dest_nam_p">
                                    <img src={beach} />
                              </div>
                              <div>
                                    <h1 className="h_pack_3_1">ABOUT US</h1>
                              </div>
                        </div>
                        <div className="cont_grid_thr_i">
                              <div className="package_grid">
                                    <div className="package_item">
                                          <div className="dest_des_p">
                                                <div className="dest_nam_p">
                                                      <h1>our mission</h1>
                                                </div>
                                                <p>
                                                create transformative travel experiences that enrich the lives of our clients, foster cultural understaandis and controbute to the conservation of the wolrd's wonders
                                                </p>
                                          </div>
                                    </div>
                                    <div className="package_item">
                                          <div className="dest_des_p">
                                                <div className="dest_nam_p">
                                                      <h1>our vision</h1>
                                                </div>
                                                <p>
                                                To be the most sought-after travel and tourism company in uganda, celebrated for our innovation, passion for travel and unwavirng commitiment to excptional customer service.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              <div className="package_grid">
                                    <div className="package_item">
                                          <div className="dest_des_p">
                                                <div className="dest_nam_p">
                                                      <h1>our core values</h1>
                                                </div>
                                                <p>
                                                      <b>Empathy and cultral sensitivity</b>
                                                      <br /><br />
                                                      We priotize understand and respecting the diverse cultures and communities we encounter, fostering meaningful connectoins with both our clients and the destinations we serve.
                                                      sustainability and conservation are dedicated echo-friendly practices and suporting initiatives that contribute to the protection and preservation of the environment as well as the natural beauty of the world
                                                      <br /><br />
                                                      <b>PIONEERING SPIRIT</b>
                                                      <br /><br />
                                                      embrace innovation and continuosily seek various new ways to enhance travel experiences for our clients, staying ahead in the rapidly evolving tours and travels industry.
                                                </p>
                                                <p>                                                      
                                                      <b>INCLUSIVITY</b>
                                                      <br /><br />
                                                      welcome traveler from all walks of life and aim to make tourism and travel accesible to everyone , ensuring that our services match the dynamic and latest tourism trends.
                                                      <br /><br />
                                                </p>
                                          </div>
                                    </div>
                                    <div className="package_item">
                                          <div className="dest_container_img_bg">
                                                <img src={tent} alt="" className="d_bg" />
                                          </div>
                                          <div className="dest_des_p">
                                                <p>
                                                      <b>PERSONLISED SERVICE</b>
                                                      <br /><br />
                                                      believe in crafting bespoke itineries that cater to the unique interest and desires of our clients providing with remarkable travel and tourism experiences.
                                                </p>
                                          </div>
                                          <div className="dest_container_img_bg">
                                                <img src={travel} alt="" className="d_bg" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="dest_img_bg-40"></div>
            </div>
      )
}
export default AboutPage
