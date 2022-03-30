import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .collab {
    text-align: right;
  }

  .collab p {
    font-weight: lighter !important;
    margin-bottom: 20px;
  }

  .hr {
    background: rgba(255, 255, 255, 0.2);
    height: 1px;
  }

  .info h4 {
    font-size: 18px;
    font-weight: lighter;
  }

  .info p {
    color: grey;
    font-weight: lighter;
  }

  .info li {
    font-weight: lighter;
    color: #fff;
    font-size: 18px;
    padding-left: 20px;
  }

  #fb::before {
    display: inline-block;
    content: "";
    border-radius: 100%;
    height: 4px;
    width: 4px;
    margin-right: 6px;
    background: #3b5998;
  }

  #ig::before {
    display: inline-block;
    content: "";
    border-radius: 100%;
    height: 4px;
    width: 4px;
    margin-right: 6px;
    background: #fcaf45;
  }

  #tw::before {
    display: inline-block;
    content: "";
    border-radius: 100%;
    height: 4px;
    width: 4px;
    margin-right: 6px;
    background: #55acee;
  }

  #yt::before {
    display: inline-block;
    content: "";
    border-radius: 100%;
    height: 4px;
    width: 4px;
    margin-right: 6px;
    background: #c4302b;
  }

  #media,
  #address {
    text-align: right;
  }

  #media ul {
    list-style: none;
  }

  #media ul li {
    display: inline-block;
  }

  @media (max-width: 768px) {
    .collab,
    #personal,
    #media,
    #address {
      text-align: center;
    }

    .info ul {
      margin: 0 0 0 -22px;
      padding: 0;
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
