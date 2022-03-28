import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <br />
        <br />

        <div className="collab">
          <div className="row">
            <div className="col-lg-12">
              <p className="wow fadeInUp">
                Got an interesting project? I can help you.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="hr">
          <div className="row"></div>
        </div>

        <br />
        <br />

        <div className="info">
          <div className="row">
            <div className="col-lg-4" id="personal">
              <p className="wow fadeInUp">connect with me</p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                ig @ikyilmaz
              </h4>
              <br />
              <br />
            </div>

            <div className="col-lg-4" id="media">
              <p className="wow fadeInUp" data-wow-delay="0s">
                follow me
              </p>

              <ul>
                <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s">
                  fb
                </li>
                <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">
                  ig
                </li>
                <li id="tw" className="wow fadeInUp" data-wow-delay="0.8s">
                  tw
                </li>
                <li id="yt" className="wow fadeInUp" data-wow-delay="1s">
                  yt
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div className="col-lg-4" id="address">
              <p className="wow fadeInUp" data-wow-delay="0s">
                say hello
              </p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                ismailkurbanyilmaz@gmail.com
              </h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
