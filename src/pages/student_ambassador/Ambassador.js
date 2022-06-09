import React from "react";
import "./Ambas.css";
import { useEffect } from "react";
import Ambas1 from "../../assets/images/ambassador-1.png";
import Ambas2 from "../../assets/images/ambassador-2.png";
import Ambas3 from "../../assets/images/ambassador-3.png";
import Ambas4 from "../../assets/images/ambassador-4.png";
import Ambas5 from "../../assets/images/ambassador-5.png";
import Programdesc from "./Programdesc";

console.log(Ambas1);

const Ambassador = () => {
  useEffect(() => {
    let newTitle = "Earn up to $1500 as a Barter ambassador.";
    if (document.title !== newTitle) document.title = newTitle;
  }, []);

  return (
    <>
      <main id="hero">
        <section className="hero-left">
          <h1>
            Earn up to <span>$1500</span> as a Barter ambassador.
          </h1>
          <p>
            Do you already tell your friends about Barter? Well, it's time to
            get rewarded.
          </p>
          <button className="hero-btn">
            <a href="#hero">Apply Now</a>
          </button>
        </section>

        <section className="hero-right hero-images">
          <div className="img-div-1">
            <img className="img-1" src={Ambas1} alt="smiling girl"></img>
          </div>
          <div>
            <img src={Ambas2} alt="smiling girl"></img>
          </div>
          <div>
            <img src={Ambas3} alt="smiling girl"></img>
          </div>
          <div>
            <img src={Ambas5} alt="smiling girl"></img>
          </div>
          <div>
            <img src={Ambas4} alt="smiling girl"></img>
          </div>
        </section>
      </main>

      <section className="Ambas-program">
        <h2>What is the Barter ambassador program?</h2>
        <p>
          The <span className="barter-text">Barter</span> Student Ambassador
          Program is an exclusive community of young, smart, and influential
          students in some of the leading universities across the world such as
          Princeton University, University of Cape Town, Ashesi University,
          University of Nairobi, University of Lagos, and Kwame Nkrumah
          University of Science and Technology, among others.
        </p>
      </section>
      <section>
        <Programdesc />
      </section>
      <section className="closing closing--ambassador">
        <div className="closing--container">
          <h4 className="closing--heading">
            I want to become an Ambassador! what's next?
          </h4>
          <p className="closing--text">
            Start by clicking the link below to join. Applications to the
            program open every quarter, and the first cohort of Barter
            Ambassadors will be selected and announced in November. If you have
            been selected to join the first cohort, you will hear from us
            sometime in November.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVCYILYxRqrhl5bU_Yt1YWaYVHpq9OD7bjzQdADOx866ZFEQ/viewform"
            className="closing--btn"
          >
            Apply now
          </a>
        </div>
      </section>
    </>
  );
};

export default Ambassador;
