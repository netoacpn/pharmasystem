import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from '../itensCarousel';
import slider from "../itensCarousel/slider.json"

function CarouselHome(){

    return (
        <Carousel>
            {
              slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}


export {CarouselHome}