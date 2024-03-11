import React from 'react'
import Slider from './Slider'
import './home.css'
import { Link } from 'react-router-dom'

import Carousel from './Portfolio'
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
    <div className="exclusive">
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
    <div className="main-banner my-5" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            {/* <div className="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div className="main-border-button">
                                    <Link to="/">Purchase Now!</Link>
                                </div>
                            </div> */}
                            <img src="./images/home/right1.jpg" alt='' />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Women</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to="/women">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="./images/home/left1.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Men</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to="/men">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="./images/home/right2.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Kids</h4>
                                            <span>Best Clothes For Kids</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Kids</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to="/kids">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="./images/home/right3.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Accessories</h4>
                                            <span>Best Trend Accessories</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Accessories</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <Link to="/accessories">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="./images/home/right4.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* product slider end  */}

     {/* tranding product start */}
    <div className="products mtop-100">
        <div className="container">
            <h1 className="text-center"># Trending Product #</h1>
            <div className="prod">
                <div className="row">
                    <div className="col-lg-3">
                        <img src="./images/home/pro1.jpg" alt="" />
                        <div className="text">
                            <h6>Ruffal T-shirt</h6>
                            <p>$18.00</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src="./images/home/pro1.jpg" alt="" />
                        <div className="text">
                            <h6>Ruffal T-shirt</h6>
                            <p>$18.00</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src="./images/home/pro1.jpg" alt="" />
                        <div className="text">
                            <h6>Ruffal T-shirt</h6>
                            <p>$18.00</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img src="./images/home/pro1.jpg" alt="" />
                        <div className="text">
                            <h6>Ruffal T-shirt</h6>
                            <p>$18.00</p>
                        </div>
                    </div>
                </div>
                <center>
                    <button className="btn-view button"><Link to="/collection">more items</Link></button>
                </center>
            </div>
        </div>
    </div>
    {/* tranding product end */}


    {/* instagram slider start */}
    {/* <div className="instagram mtop-100">
        <div className="slid">
            <div className="main-carousel">
                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro2.jpg" alt="" /></Link>
                </div>
                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro3.jpg" alt="" /></Link>
                </div>
                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro4.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro2.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro3.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro4.jpg" alt="" /></Link>
                </div>
                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro2.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro3.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro4.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro2.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro3.jpg" alt="" /></Link>
                </div>

                <div className="cell">
                    <Link to="https://www.instagram.com/house_of_jama/">
                        <img src="./images/home/pro4.jpg" alt="" /></Link>
                </div>


            </div>
        </div>

    </div> */}

    {/* instagram slider end */}
    <Carousel />



    </>
  )
}
