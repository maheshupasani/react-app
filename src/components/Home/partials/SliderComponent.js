import React, { Component } from 'react'

const public_url    = process.env.PUBLIC_URL;

const sliderImages  = [
    {
        "image"     : public_url + "images/home/slider/girl1.jpg",
        "content"   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "tag"       : public_url + "images/home/slider/pricing.png"
    },
    {
        "image"     : public_url + "images/home/slider/girl2.jpg",
        "content"   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "tag"       : public_url + "images/home/slider/pricing.png"
    },
    {
        "image"     : public_url + "images/home/slider/girl3.jpg",
        "content"   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "tag"       : public_url + "images/home/slider/pricing.png"
    }
]
export default class SliderComponent extends Component {
    render() {
        return (
            <div>
                <section id="slider">{/* slider */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#slider-carousel" data-slide-to="1"></li>
                                        <li data-target="#slider-carousel" data-slide-to="2"></li>
                                    </ol>
                                    
                                    <div className="carousel-inner">
                                        { sliderImages.map( (image,key) => 
                                            <div className={key == 0 ? "item active" : "item"}>
                                                <div className="col-sm-6">
                                                    <h1><span>E</span>-SHOPPER</h1>
                                                    <h2>Free E-Commerce Template</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                    <button type="button" className="btn btn-default get">Get it now</button>
                                                </div>
                                                <div className="col-sm-6">
                                                    <img src={image.image} className="girl img-responsive" alt="" />
                                                    <img src={image.tag}  className="pricing" alt="" />
                                                </div>
                                            </div>
                                        )}                                       
                                    </div>
                                    
                                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </a>
                                    <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section> {/* /slider */}
            </div>
        )
    }
}
