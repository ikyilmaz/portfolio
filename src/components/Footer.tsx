import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Wrapper = styled.div`
  .collab {
    text-align: right;
  }

  .collab p {
    font-weight: lighter !important;
    margin-bottom: 20px;
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

  .social-link {
    text-decoration: none;
    color: white;
  }
`;

export const Footer: React.FC = () => {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const connectWithRef = useRef<HTMLParagraphElement>(null);
  const usernameRef = useRef<HTMLHeadingElement>(null);
  const followMeRef = useRef<HTMLParagraphElement>(null);
  const socialFbRef = useRef<HTMLLIElement>(null);
  const socialIgRef = useRef<HTMLLIElement>(null);
  const socialYtRef = useRef<HTMLLIElement>(null);
  const socialTwRef = useRef<HTMLLIElement>(null);
  const sayHelloRef = useRef<HTMLParagraphElement>(null);
  const mailRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // FIXME! ??ok fazla tekrar eden bir kod y??????n??

    // Buradaki her bir animasyon ilgili element viewporta girdi??i an ??al????acak...

    // Proje soru k??sm??n??n giri?? animasyonu...
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(quoteRef.current, {
      scrollTrigger: quoteRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
    });

    // ??leti??ime ge??elim k??sm??
    gsap.from(connectWithRef.current, {
      scrollTrigger: connectWithRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.2,
    });

    // Kullan??c?? ad??
    gsap.from(usernameRef.current, {
      scrollTrigger: usernameRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.4,
    });

    // Takip edin
    gsap.from(followMeRef.current, {
      scrollTrigger: followMeRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.2,
    });

    // Sosyal medya hesaplar??m??n linkleri
    gsap.from(socialFbRef.current, {
      scrollTrigger: socialFbRef.current,
      duration: 1,
      transform: "translateY(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.5,
    });
    gsap.from(socialIgRef.current, {
      scrollTrigger: socialIgRef.current,
      duration: 1,
      transform: "translateY(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.6,
    });
    gsap.from(socialYtRef.current, {
      scrollTrigger: socialYtRef.current,
      duration: 1,
      transform: "translateY(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.7,
    });
    gsap.from(socialTwRef.current, {
      scrollTrigger: socialTwRef.current,
      duration: 1,
      transform: "translateY(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.8,
    });

    // Merhaba diyin
    gsap.from(sayHelloRef.current, {
      scrollTrigger: sayHelloRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.2,
    });

    // E-Posta adresim
    gsap.from(mailRef.current, {
      scrollTrigger: mailRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.4,
    });
  });

  return (
    <Wrapper>
      <div className="footer">
        <div className="container">
          <br />
          <br />

          <div className="collab">
            <div className="row">
              <div className="col-lg-12">
                <p ref={quoteRef}>??leti??ime ge??elim!</p>
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
                <p ref={connectWithRef}>ba??lant?? kur</p>
                <h4 ref={usernameRef}>@ikyilmaz</h4>
                <br />
                <br />
              </div>

              <div className="col-lg-4" id="media">
                <p ref={followMeRef}>takiple??elim</p>

                <ul>
                  <li ref={socialFbRef} id="fb">
                    <a
                      className="social-link"
                      href="https://linkedin.com/in/ikyilmaz"
                      target={"_blank"}
                    >
                      linkedin
                    </a>
                  </li>

                  <li ref={socialIgRef} id="ig">
                    <a
                      className="social-link"
                      href="https://instagram.com/ikyilmaz"
                      target={"_blank"}
                    >
                      ig
                    </a>
                  </li>

                  <li ref={socialYtRef} id="yt">
                    <a
                      className="social-link"
                      href="https://github.com/ikyilmaz"
                      target={"_blank"}
                    >
                      github
                    </a>
                  </li>
                  <li ref={socialTwRef} id="tw">
                    <a
                      className="social-link"
                      href="https://twitter.com/ikyilmaz"
                      target={"_blank"}
                    >
                      tw
                    </a>
                  </li>
                </ul>

                <br />
                <br />
              </div>

              <div className="col-lg-4" id="address">
                <p ref={sayHelloRef}>merhaba de</p>
                <h4 ref={mailRef}>ismailkurbanyilmaz@gmail.com</h4>
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
