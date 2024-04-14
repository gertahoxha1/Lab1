import React from "react";
import Title from "./Title";
import { payment } from "../data";
const Tours = () => {
  return (
    <section className="section" id="payment">
      <Title title="featured" subTitle="plans" />

      <div className="section-center featured-center">
        {payment.map((tour) => {
          const { id, image, date, title, info, location, cost } =
            tour;
          return (
            <article className="payment-card" key={id}>
              <div className="payment-img-container">
                <img src={image} className="payment-img" alt={title} />
                <p className="payment-date">{date}</p>
              </div>
              <div className="payment-info">
                <div className="payment-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="payment-footer">
                  <p>
                    <span>
                      <i className="fas fa-book"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <a href="#purchase" className="btn">Purchase</a>
                  
                  <p>${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;