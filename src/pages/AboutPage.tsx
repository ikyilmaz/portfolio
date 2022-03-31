import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

const Wrapper = styled.div`
  .about {
    height: 500px;
    margin-top: 120px;
  }

  .image {
    background: url(https://images.unsplash.com/photo-1540885762261-a2ca01f290f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80)
      no-repeat 50% 70%;
  }
`;

export const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Wrapper className="wrapper">
        <div className="whitespace"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 about image wow fadeInUp"
              data-wow-delay="1s"
            ></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <br />

            <div className="row">
              <div className="col-lg-12">
                <h3 className="wow fadeInUp" data-wow-delay="1.2s">
                  hakkımda.
                </h3>
                <br />

                <p>
                  Üniversiteyi Akdeniz Üniversitesi Bilgisayar Programcılığı
                  Bölümünde okudum. Bu dönemde kendimi <b>web developer</b>{" "}
                  olarak geliştirmeye çalıştım. Front-End alanında ilk
                  temellerimi <b>(HTML-Pug/CSS-SASS-LESS/JS-TS)</b> attıktan
                  sonra <b>VueJS</b> kütüphanesiyle ve ardından sırasıyla{" "}
                  <b>ReactJS</b>, <b>Angular</b> kütüphanelerini kullanarak
                  projeler geliştirdim. Back-end kısmında ise ağırlıklı olarak{" "}
                  <b>NodeJS</b> üzerinde geliştirmeler yaptım. NodeJS
                  kullanırken de <b>NestJS</b> ve <b>ExpressJS</b>{" "}
                  kütüphanelerinden yararlandım. Veritabanı olarak{" "}
                  <b>PostgreSQL</b>, <b>MySQL</b>, <b>MongoDB</b> ve{" "}
                  <b>Redis</b> kullanmayı amaçladım. ORM/ODM olarak{" "}
                  <b>Sequelize</b>, <b>typeorm</b> ve <b>mongoose</b> kullanmayı
                  öğrendim. <b>GoLang</b>'e merak salıp, öğrendim. <b>Gin</b> ve{" "}
                  <b>gofiber</b> kütüphanelerini kullanarak back-end yazılımlar
                  geliştirdim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};
