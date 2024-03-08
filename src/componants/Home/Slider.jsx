import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Slider() {
  return (
    <>
      <div class="background mt-5">
        <div class="row">
          <div class="col-lg-9">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./images/home/home1.avif" alt="" />
                </div>
                <div class="carousel-item">
                  <img src="./images/home/home2.avif" alt="" />
                </div>
                <div class="carousel-item">
                  <img src="./images/home/home3.avif" alt="" />
                </div>
                <div class="carousel-item">
                  <img src="./images/home/home5.avif" alt="" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-lg-3">
            <Link to="./men">
              <div class="right-banner">
                <img src="./images/home/men1.avif" alt="" />
                <div class="text">
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
