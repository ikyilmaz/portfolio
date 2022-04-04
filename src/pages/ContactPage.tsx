import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

const Wrapper = styled.div`
  #contact-form {
    margin: 5% 1.4%;
  }

  #contact-form ul {
    list-style: none;
    border-radius: 5px;
    margin-bottom: 40px;
    /* padding-left: 0px; */
  }

  #contact-form li {
    padding: 10px;
  }

  #contact-form li:last-of-type {
    border-bottom: none;
  }

  #contact-form label {
    display: block;
    font-size: 0.8em;
    color: #999;
    padding-left: 5px;
  }

  #contact-form input,
  #contact-form textarea {
    width: 100%;
    padding: 5px;
    border: none;
    resize: vertical;
    background: transparent;
    color: #fff;
    font-weight: bolder;
  }

  input:focus {
    outline: none;
    border: none;
  }

  textarea:focus {
    outline: none;
    border: none;
  }

  .textarea {
    border-bottom: 1px solid #dfdfdf;
  }

  .send {
    position: relative;
    float: right;
    text-transform: uppercase;
    padding: 20px 30px;
    background: transparent;
    color: #dfdfdf;
    font-size: 14px;
    letter-spacing: 2px;
    border: 0px;

    &:hover::after {
      transform: scaleX(1);
    }

    &::after {
      content: "";
      width: 100%;
      height: 5px;
      bottom: 0;
      left: 0;
      background-color: white;
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.3s;
    }
  }

  @media (max-width: 768px) {
    #contact-form {
      margin: 5% -10%;
      width: 98%;
    }
  }

  @media (min-width: 768px) {
    .hero-content {
      margin-left: 25px;
    }
  }
`;

export const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Wrapper className="wrapper">
        <div className="whitespace"></div>

        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-8">
                <br />
                <br />
                <br />
                <br />

                <h3>merhaba de 👋</h3>
                <br />
                <p className="">
                  Görüşmek istediğiniz herhangi bir konu var ise aşağıdan bana
                  mesaj atabilirsiniz!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                name="contact-form"
                id="contact-form"
                method="post"
                action=""
              >
                <ul>
                  <li>
                    <label>İsim :</label>
                    <div className="textarea">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <label>E-Posta :</label>
                    <div className="textarea">
                      <input
                        type="email"
                        name="contact-email"
                        id="contact-email"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <label>Mesaj :</label>
                    <div className="textarea">
                      <textarea
                        name="contact-project"
                        id="contact-project"
                        required
                      ></textarea>
                    </div>
                  </li>
                </ul>

                <button
                  type="submit"
                  name="contact-submit"
                  id="contact-submit"
                  className="send"
                >
                  Gönder mesajı
                </button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};
