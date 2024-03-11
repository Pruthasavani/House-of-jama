import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Slider() {
  return (
    <>
      <div className="background mt-5">
        <div className="row">
          <div className="col-lg-9">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/home/home1.avif" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="./images/home/home2.avif" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="./images/home/home3.avif" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="./images/home/home5.avif" alt="" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <Link to="./men">
              <div className="right-banner">
                <img src="./images/home/men1.avif" alt="" />
                <div className="text">
                  <h1>men's <br /> collections</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
