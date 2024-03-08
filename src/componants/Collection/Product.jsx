import React from 'react'

export default function Product(props) {
    const {img , title, desc} = props
    return (
        <>
            <div className="col-lg-3 my-4">
                <div class="card" >
                    <img src={img} class="card-img-top" alt="..." />
                    {/* <div class="card-body">
                        <h5 class="card-title"> {title}</h5>
                        <p class="card-text"> {desc} </p>
                        <a href="#" class="btn btn-buy">Buy Now</a>
                    </div> */}
                </div>
            </div>
        </>
    )
}
