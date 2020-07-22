import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import styled from 'styled-components';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    {/* img-container is own class */}
                    <div className="img-container p-5" onClick={() => console.log("you clicked the image container")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        {/* cart-btn is own class */}
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {console.log("added to cart");}}>
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    in cart
                                </p>
                                ) : (<i class="fa fa-cart-plus" aria-hidden="true" />)
                            }
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-red font-italic mb-0">
                            <span className="mr-0">$</span> 
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    } 
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
}
&:hover{
    .card{
        border:0.08rem solid rgba(0,0,0,0.2);
        box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 0.5s linear;
    transform: scale(1.3);
}
.img-container:hover .card-img-top{
    transform: scale(1.5);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background:var(--lightBlue);
    border: none;
    color:var(--mainWhite);
    font-size: 1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%, 100%); 
    transition: all 0.5s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color:var(--mainRed);
    cursor: pointer;
}
`;