import React from "react";
import {ForwardOutlined} from '@ant-design/icons'
import "../Footer/footer.css";
import Zoom from 'react-reveal/Zoom';
export default function Footer() {
  return (
    <footer className="footer-sky footer-sky-v4">
      <div className="container">
      <Zoom top right cascade delay={1000}>
        <div className="footer-top text-center">
          <div className="icon-email">
            <a href="#" title="Email">
              <img
                src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/footer-top-icon-l.png"
                alt="Email"
                className="img-responsive"
              />
            </a>
          </div>
          <h2>NEWS &amp; OFFERS</h2>
          <p>
            Enjoy many benefits and receive our promotions and special offers
            directly
          </p>
          <div className="textbox">
            <form className="form-inline">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    aria-label="Search for..."
                  />
                  <button className=" btn-footer" type="button">
                 <span  className="forwar">
                 <ForwardOutlined />
                  </span> 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div></Zoom>
        <Zoom top left cascade delay={1000}>
        <div className="footer-bottom bottom-v3">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
              <div className="footer-bottom-l">
                <a
                  href="https://thietkeweb9999.com/thiet-ke-web/khach-san-44"
                  title="Thiết kế web khách sạn"
                  rel="dofollow"
                  target="_blank"
                  style={{ border: "none" }}
                >
                  Thiết kế 
                </a>{" "}
                bởi{" "}
                <a target="_blank" style={{ border: "none" }}>
                  BAOPT BC03 CYBER
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 ">
              <div className="payments text-right" style={{ marginTop: 35 }}>
                <ul className="d-flex">
                  <li className="px-3">
                    <a href="#" title="Paypal">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-506.png"
                        alt="Paypal"
                      />
                    </a>
                  </li>
                  <li className="px-3">
                    <a href="#" title="Visa">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-507.png"
                        alt="Visa"
                      />
                    </a>
                  </li>
                  <li className="px-3">
                    <a href="#" title="Master">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-508.png"
                        alt="Master"
                      />
                    </a>
                  </li>
                  <li className="px-3">
                    <a href="#" title="Discover">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-509.png"
                        alt="Discover"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div></Zoom>
      </div>
    </footer>
  );
}
