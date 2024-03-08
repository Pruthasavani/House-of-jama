import React from 'react'
import Slider from './Slider'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Slider />

    {/* trending start  */}
      <div className="trending my-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="bg text-center">
                        <img src="./images/Frame1.png" alt="" />
                        <h5>Free Shipping</h5>
                        <p>simply dummy text of the printing and <br /> typesetting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg text-center">
                        <img src="./images/Frame2.png" alt="" />
                        <h5>Money Back</h5>
                        <p>simply dummy text of the printing and <br /> typesetting industry.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg text-center">
                        <img src="./images/Frame3.png" alt="" />
                        <h5>Online Support</h5>
                        <p>simply dummy text of the printing and <br /> typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* trending start  */}


    {/* exclusive start  */}
    <div className="exclusive mtop-100">
        <div className="bg">
            {/* <img src="./images/home/exclusive.png" width="100%" alt="" /> */}
            <div className="text text-center">
                <h4>Exclusive Collection</h4>
                <h1>GET 25% OFF</h1>
                <button className="btn-shop button"><Link to="./collection">View More</Link></button>
            </div>

        </div>
    </div>
    {/* exclusive end  */}


    {/* product slider start  */}
    <div className="main-banner mtop-100" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <button className="main-border-button">
                                    <Link to="">Purchase Now!</Link>
                                </button>
                            </div>
                            <img src="./images/home/left1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="collection.html">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Women</h4>
                                                <span>Best Clothes For Women</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Women</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        <a href="collection.html">shop more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="./images/home/right1.jpg"  alt='' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <a href="men-collection.html">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Men</h4>
                                                <span>Best Clothes For Men</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Men</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        <a href="men-collection.html">shop More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="./images/home/right2.jpg" alt='' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 mtop-25">
                                <a href="kids-collection.html">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Kids</h4>
                                                <span>Best Clothes For Kids</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Kids</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        <a href="kids-collection.html">shop More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="./images/home/right3.jpg" alt=''/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 mtop-25">
                                <a href="accessories.html">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Accessories</h4>
                                                <span>Best Trend Accessories</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Accessories</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
                                                        incid.</p>
                                                    <div className="main-border-button">
                                                        <a href="accessories.html">shop More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="./images/home/right4.jpg"  alt='' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* product slider end  */}





    </>
  )
}
