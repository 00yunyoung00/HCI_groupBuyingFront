import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Component } from 'react';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    
                    <p className="legend">Legend 1</p>
                </div>
                <div>

                    <p className="legend">Legend 2</p>
                </div>
                <div>
                   a
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    };
};
 
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));