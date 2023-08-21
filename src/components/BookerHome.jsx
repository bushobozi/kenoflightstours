import "./gallery.css"
import "./destinations.css"
import tent from "../tent.png"
import lakes from "../lakes.jpg"

const BookerHome = () => {
  return (
        <div className="gallerY_bo">
              <div className="galerY_bo_container">
                    <div className="dest_container_grid_two">
                          <div className="cont_grid_thr_i">
                                <div className="dest_nam_p">
                                      <h1>top locations and hubs</h1>
                                      <img src={tent} />
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
  )
}

export default BookerHome
