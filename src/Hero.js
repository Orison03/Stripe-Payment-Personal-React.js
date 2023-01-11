import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from "./images/phone.svg"
import { HiOutlineChevronRight, HiArrowNarrowRight } from "react-icons/hi";

function Hero() {
    const {closeSubmenu} = useGlobalContext()
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1 className="hero-info-heading">
            Financial infrastructure for the internet
          </h1>
          <p className="hero-info-subtitle">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <div className="btn-container">
            <button className="start-now">
              Start now{" "}
              <HiOutlineChevronRight
                style={{ color: "white", paddingTop: "4px" }}
              />
            </button>
            <button className="contact">
              Contact sales{" "}
              <HiArrowNarrowRight
                style={{ color: "#0A2540", paddingTop: "4px" }}
              />
            </button>
          </div>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone image" className="phone-img" />
        </article>
      </div>
    </section>
  );
}

export default Hero