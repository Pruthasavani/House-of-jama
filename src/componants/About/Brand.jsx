import React from 'react'
import './about.css'

export default function Brand(props) {

  const { img, title, desc } = props;

  return (
    <>
      <div className="brand-detail my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="" alt="" />
              <img src={img} style={{ width: '100%' }} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="brand-text">
                <div className="banner-title">
                  <h1>{title}</h1>
                </div>
                <div className="banner-text">
                  <p>{desc}</p>
                </div>
                <div className="banner-btn my-4">
                  <button className="btn btn-more">
                    MORE DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
