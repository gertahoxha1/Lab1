
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import registerImg from "../images/bg.jpg";
import Title from "./Title";


const Register = () => {
  return (
    <section className="section" id="register">
      <Title title="Register"/>

      <div className="section-center register-center text-red-300">
        <div className="register-img">
          <img src={registerImg} className="register-photo" alt="" />
        </div>
        <article className="register-info">
          <h3>Want to read books.Register Now!</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <Link to="/register-form" className="btn">Register</Link>
        </article>
      </div>
    </section>
  );
};

export default Register;
