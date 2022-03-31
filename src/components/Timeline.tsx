import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  //Colors
  $black: #34435e;
  $white: #ffffff;

  min-width: 300px;
  max-width: 500px;
  margin: auto;

  .timeline-item {
    font-size: 1em;
    line-height: 1.75em;
    border-top: 3px solid;
    border-image: #fff;
    border-image-slice: 1;
    border-width: 3px;
    margin: 0;
    padding: 40px;
    counter-increment: section;
    position: relative;
    text-align: justify;

    span {
      display: block;
      margin-bottom: 10px;
    }
  }
  //odd number borders
  .timeline-item:nth-child(odd) {
    border-right: 3px solid;
    padding-left: 0;

    &:before {
      left: 100%;
      margin-left: -20px;
    }
  }
  //even number borders
  .timeline-item:nth-child(even) {
    border-left: 3px solid;
    padding-right: 0;

    span {
      text-align: end;
    }

    &:before {
      right: 100%;
      margin-right: -20px;
    }
  }
  //handle first and last
  .timeline-item:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .timeline-item:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 768px) {
    width: 80vw;

    .timeline-item {
      font-size: 0.8em;
    }
  }
`;

export const Timeline: React.FC = () => {
  return (
    <React.Fragment>
      <h4 style={{ textAlign: "center", marginBottom: 30 }}>Kısaca ben</h4>
      <Wrapper>
        <p className="timeline-item">
          <span>
            <b>Lise</b> 2015-2019
          </span>
          Lise eğitimimi İzmit Muallim Naci Anadolu Lisesinde gördüm. Bölüm
          olarak ise yapancı dil (ingilizce/almanca) okudum. 2019 yılında mezun
          oldum.
        </p>
        <p className="timeline-item">
          <span>
            <b>Üniversite</b> 2019-2021
          </span>
          Üniversiteyi Akdeniz Üniversitesi Bilgisayar Programcılığı Bölümünde
          okudum. Bu dönemde kendimi <b>web developer</b> olarak geliştirmeye
          çalıştım. Front-End alanında ilk temellerimi{" "}
          <b>(HTML-Pug/CSS-SASS-LESS/JS-TS)</b> attıktan sonra <b>VueJS</b>{" "}
          kütüphanesiyle ve ardından sırasıyla <b>ReactJS</b>, <b>Angular</b>{" "}
          kütüphanelerini kullanarak projeler geliştirdim. Back-end kısmında ise
          ağırlıklı olarak <b>NodeJS</b> üzerinde geliştirmeler yaptım. NodeJS
          kullanırken de <b>NestJS</b> ve <b>ExpressJS</b> kütüphanelerinden
          yararlandım. Veritabanı olarak <b>PostgreSQL</b>, <b>MySQL</b>,{" "}
          <b>MongoDB</b> ve <b>Redis</b> kullanmayı amaçladım. ORM/ODM olarak{" "}
          <b>Sequelize</b>, <b>typeorm</b> ve <b>mongoose</b> kullanmayı
          öğrendim. <b>GoLang</b>'e merak salıp, öğrendim. <b>Gin</b> ve{" "}
          <b>gofiber</b> kütüphanelerini kullanarak back-end yazılımlar
          geliştirdim.
        </p>
        <p className="timeline-item">
          <span>
            <b>Şu an</b> 2021-?
          </span>
          Şu an ise kendimi öğrendiğim konularda geliştirmeyi hedefledim.
          Yazdığım kodları daha verimli hale getirmeye çalışıyorum. İş arıyor ve
          tecrübe kazanmak istiyorum.
        </p>
      </Wrapper>
    </React.Fragment>
  );
};
