import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const {img , title, desc} = props
    return (
        <>
            <div className="col-lg-3 my-4">
                <div className="card" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text"> {desc} </p>
                        <Link href="/" className="btn btn-buy">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
