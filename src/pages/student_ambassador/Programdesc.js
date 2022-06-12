import React from "react";
import "./Ambas.css";
import Ambas6 from "../../assets/images/ambassador-6.png";
import Ambas7 from "../../assets/images/ambassador-7.png";
import Ambas8 from "../../assets/images/ambassador-8.png";
import Ambas9 from "../../assets/images/ambassador-9.png";
import QuestionPart from "./QuestionPart";

function Programdesc() {
  return (
    <div className="row section-content">
      <QuestionPart />
      <div className=" col section-content-column wider ">
        <h3 className="heading"> What's in it for you?</h3>
        <p className="paragraph">
          {" "}
          By joining the Barter Ambassador, you will be able to:
        </p>
        <ul className="list">
          <li>
            Enhance your professional development, leadership, technical and
            communication skills.
          </li>
          <li>
            Access internship opportunities with Flutterwave or any of our
            clients who need interns.
          </li>
          <li>Access mentorship by experts from Flutterwave.</li>
          <li>Obtain a certificate of recognition.</li>
          <li>
            Participate in special Flutterwave events and product trainings.
          </li>
          <li>
            Incorporate your own ideas and support in a creative environment.
          </li>
          <li>Earn money while in school.</li>
        </ul>
      </div>
      <div className=" col section-content-column small">
        <div className="figures">
          <div className=" figure fig--1">
            <div className="figure-box"></div>
          </div>
          <div className="figure fig--2">
            <img className="image" alt="ambassador" src={Ambas6}></img>
          </div>
        </div>
        <div className="figures">
          <div className="figure fig--3">
            <img className="image" alt="ambassador" src={Ambas8}></img>
          </div>
          <div className="figure fig--4">
            <img className="image" alt="ambassador" src={Ambas7}></img>
          </div>
        </div>
        <div className="figures">
          <div className="figure fig--5">
            <img className="image" alt="ambassador" src={Ambas9}></img>
          </div>
          <div className=" figure fig--6">
            <div className="figure-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programdesc;
