import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { landingFadeIn } from "../utils/fadeInUp";
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
    // FIXME! Çok fazla tekrar eden bir kod yığını

    // Buradaki her bir animasyon ilgili element viewporta girdiği an çalışacak...

    // Proje soru kısmının giriş animasyonu...
    gsap.from(quoteRef.current, {
      scrollTrigger: quoteRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
    });

    // İletişime geçelim kısmı
    gsap.from(connectWithRef.current, {
      scrollTrigger: connectWithRef.current,
      duration: 1,
      transform: "translateX(-100px)",
      opacity: 0,
      ease: Cubic.easeInOut,
      delay: 0.2,
    });

    // Kullanıcı adı
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

    // Sosyal medya hesaplarımın linkleri
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
                <p ref={quoteRef} className="wow fadeInUp">
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
                <p ref={connectWithRef} className="wow fadeInUp">
                  connect with me
                </p>
                <h4 ref={usernameRef}>ig @ikyilmaz</h4>
                <br />
                <br />
              </div>

              <div className="col-lg-4" id="media">
                <p
                  ref={followMeRef}
                  className="wow fadeInUp"
                  data-wow-delay="0s"
                >
                  follow me
                </p>

                <ul>
                  <li
                    ref={socialFbRef}
                    id="fb"
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    fb
                  </li>
                  <li
                    ref={socialIgRef}
                    id="ig"
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    ig
                  </li>

                  <li
                    ref={socialYtRef}
                    id="yt"
                    className="wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    yt
                  </li>
                  <li
                    ref={socialTwRef}
                    id="tw"
                    className="wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    tw
                  </li>
                </ul>

                <br />
                <br />
              </div>

              <div className="col-lg-4" id="address">
                <p
                  ref={sayHelloRef}
                  className="wow fadeInUp"
                  data-wow-delay="0s"
                >
                  say hello
                </p>
                <h4
                  ref={mailRef}
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
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
