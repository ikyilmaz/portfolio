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
    margin-left: 0px;
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
    margin-left: 50px;
    text-transform: uppercase;
    padding: 20px 30px;
    background: transparent;
    color: #dfdfdf;
    font-size: 14px;
    letter-spacing: 2px;
  }

  .send:hover {
    background: #dfdfdf;
    color: #101010;
  }

  @media (max-width: 768px) {
    #contact-form {
      margin: 5% -8%;
      width: 98%;
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
            <br />
            <br />

            <div className="row">
              <div className="col-lg-8">
                <h3 data-wow-delay="1s">say hello 👋</h3>
                <br />
                <p data-wow-delay="1.2s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, accusantium sint quod voluptatem dolorum, quaerat, ut
                  iusto cumque magni ab repudiandae, quasi minus unde temporibus
                  nulla eum eaque! Placeat praesentium sunt suscipit laboriosam
                  deserunt commodi atque corporis, iure maiores dicta, fugit
                  similique.
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
                  <li data-wow-delay="1.4s">
                    <label>Name :</label>
                    <div className="textarea">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        required
                      />
                    </div>
                  </li>

                  <li data-wow-delay="1.6s">
                    <label>Email :</label>
                    <div className="textarea">
                      <input
                        type="email"
                        name="contact-email"
                        id="contact-email"
                        required
                      />
                    </div>
                  </li>

                  <li data-wow-delay="1.6s">
                    <label>Message :</label>
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
                  className="send wow fadeInUp"
                >
                  Send Message
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
