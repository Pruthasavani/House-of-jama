import React from 'react'
import './collection.css'

export default function Collection() {
  return (
    <>
      <div className="banner ">
        <img src="./images/home1.avif" className="d-block w-100" alt="" />
      </div>

      <div className="shipped my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>SHIPPED IN 7 DAYS</h1>
            </div>
            <div className="col-lg-4">
              <div className="hov">
                <div className="img">
                  <img className="" src="./images/shipped1.avif" alt="" />
                </div>
              </div>
              <p>men </p>
            </div>
            <div className="col-lg-4">
              <div className="hov">
                <div className="img">
                  <img className="" src="./images/shipped2.avif" alt="" />
                </div>
              </div>
              <p>Women</p>
            </div>
            <div className="col-lg-4">
              <div className="hov">
                <div className="img">
                  <img className="" src="./images/shipped3.avif" alt="" />
                </div>
              </div>
              <p>kids</p>
            </div>
          </div>
        </div>
      </div>

<div className="summer">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1>SUMMER WEDDING VAULT</h1>
      </div>
      <div className="col-lg-8">
        
      </div>
    </div>
  </div>
</div>
      


    </>
  )
}
