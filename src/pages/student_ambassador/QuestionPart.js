import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./Ambas.css";
import SingleQuestion from "./Question";
import data from "./data";

const QuestionPart = () => {
  const [questions, setQuestions] = useState(data);
  const style = {
    marginRight: "7px",
    borderRadius: "50%",
    backgroundColor: "#deeded",
    fontWeight: "bold",
    color: "#167c80",
    padding: "5px",
    fontSize: "16px",
    marginTop: "9px",
  };

  return (
    <section className="que-section">
      <div className="section-row">
        <div className="section-left">
          <header>
            <h1>
              All your questions,
              <br /> answered.
            </h1>
          </header>
          <p>
            This opportunity is currently open to students enrolled in
            university degree programs. As an undergrad, postgrad or PhD
            student, you can join the Barter Ambassador program at your school,
            refer others, and make money.
          </p>
          <h3>Barter Ambassadors must be:</h3>
          <ul>
            <li>
              <FaCheck style={style} />
              Currently enrolled in a college or university in a country where
              you can use Barter.
              <a href="#">(See list of countries)</a>
            </li>
            <li>
              <FaCheck style={style} /> Pursuing an undergraduate, postgraduate,
              PhD or any program spanning a minimum of 1 year.
            </li>
            <li>
              <FaCheck style={style} /> Passionate about business and
              technology.
            </li>
            <li>
              <FaCheck style={style} /> An active member of a number of student
              groups, clubs and associations on your campus.
            </li>
          </ul>
        </div>

        <div className="section-right">
          <h3>What will Ambassadors do?</h3>
          <h3> Ambassadors are required to:</h3>
          <ul>
            <li>
              <FaCheck style={style} />
              Commit at least 6 months of their academic year to the ambassador
              program.
            </li>
            <li>
              <FaCheck style={style} />
              Commit at least a minimum of an hour per week for meetings or the
              training program.
            </li>
            <li>
              <FaCheck style={style} />
              Be reliable and punctual
            </li>
          </ul>
          <h3>How you will spend your time as a Barter Ambassador</h3>
          <ul>
            <li>
              <FaCheck style={style} />
              Get other students to sign up on Barter.
            </li>
            <li>
              <FaCheck style={style} />
              Promote barter at on-campus events when such events are held at
              your university.
            </li>
            <li>
              <FaCheck style={style} />
              Spread Barter goodwill to your fellow students.
            </li>
            <li>
              <FaCheck style={style} />
              Check with program directors periodically as communicated.
            </li>
            <li>
              <FaCheck style={style} />
              Collect feedback and help improve Barter for our users.
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-que">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default QuestionPart;
