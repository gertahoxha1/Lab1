import React from "react";
import registerImg from "../images/bg.jpg";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
const Register = () => {


const navigate = useNavigate()
const handleClick  = () =>{
  navigate('/registerform')
}
  return (
    <section className="section" id="register">
      <Title title="Register"/>

      <div className="section-center register-center">
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
          <a href="/registerform" className="btn" onClick={handleClick} >
            Register
          </a>
        </article>
      </div>
    </section>
  );
};

export default Register;