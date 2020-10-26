import React from 'react'
import { CarouselProvider, Slide, Slider, } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import WideSlide from '../../components/WideSlide.js'
import CarouselCustomProvider from './CarouselCustomProvider.js'
import fetchSlides from '../../localServer/getters/fetchSlides.js'

const slides = fetchSlides()

function SliderSection() {
  return (
    <div className='slider_section'>
      <CarouselProvider
        visibleSlides={1}
        totalSlides={slides.length}
        step={1}
        naturalSlideWidth={300}
        naturalSlideHeight={200}
        infinite
        dragEnabled={false}
        disableAnimation
      >
        <CarouselCustomProvider>
          { ({ currentSlide }) => (
            <Slider className='slider'>
              {slides.map((slide, index) => (
                <Slide index={index} key={index}>
                  <WideSlide slide={slide} visible={index === currentSlide} />
                </Slide>
              ))}
            </Slider>
          )}
        </CarouselCustomProvider>
      </CarouselProvider>
    </div>
  )
}

export default SliderSection
