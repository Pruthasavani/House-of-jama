import React from 'react'
import './about.css'
import Brand from './Brand'
export default function About() {

  return (
    <>
      <div className="banner ">
        <img src="./images/banner.webp" className="d-block w-100" alt="" />
      </div>


      {/* <div className="who">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="banner-title">
                <h1>Who We Are</h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="banner-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id est obcaecati perspiciatis sint mollitia nobis officiis
                  vitae repellendus praesentium illum cumque at reprehenderit necessitatibus eveniet alias non repudiandae temporibus fugit? Mollitia
                  reprehenderit necessitatibus rem quas harum eos? Rem hic minus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id est obcaecati perspiciatis sint mollitia nobis officiis
                  vitae repellendus praesentium illum cumque at reprehenderit necessitatibus eveniet alias non repudiandae temporibus fugit? Mollitia
                  reprehenderit necessitatibus rem quas harum eos? Rem hic minus?
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner-title">
                <h1>Our Vision</h1>
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <div className="brand">
        <div className="container">
          <div className="banner-title">
            <h1>Our Brands</h1>
          </div>
          <div className="banner-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id est obcaecati perspiciatis sint mollitia nobis officiis
              vitae repellendus praesentium illum cumque at reprehenderit necessitatibus eveniet alias non repudiandae temporibus fugit? Mollitia
              reprehenderit necessitatibus rem quas harum eos? Rem hic minus?
            </p>
          </div>
        </div>
      </div>
      

    <Brand title='Wendell Rodricks' 
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi. 
        Magnam, ex expedita quas delectus perferendis cumque harum odio commodi iste. Enim dignissimos sit itaque. Magnam enim ducimus animi, eius tempore consequatur
        maiores excepturi ipsum laboriosam nam molestias. Deleniti a, veritatis voluptatem esse cumque ducimus voluptas non illo ea iure.' 
      img='./images/brand1.webp'
    />
    <Brand title='Hemant Trevedi' 
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi. 
        Magnam, ex expedita quas delectus perferendis cumque harum odio commodi iste. Enim dignissimos sit itaque. Magnam enim ducimus animi, eius tempore consequatur
        maiores excepturi ipsum laboriosam nam molestias. Deleniti a, veritatis voluptatem esse cumque ducimus voluptas non illo ea iure.' 
      img='./images/brand2.webp'
    />
    <Brand title='First Look' 
      desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi. 
        Magnam, ex expedita quas delectus perferendis cumque harum odio commodi iste. Enim dignissimos sit itaque. Magnam enim ducimus animi, eius tempore consequatur
        maiores excepturi ipsum laboriosam nam molestias. Deleniti a, veritatis voluptatem esse cumque ducimus voluptas non illo ea iure.' 
      img='./images/brand3.webp'
    />

    </>
  )
}