import React, { useContext, useEffect, useState } from 'react'
import { CarouselContext } from 'pure-react-carousel'

function CarouselCustomProvider({ children }) {
  const carouselContext = useContext(CarouselContext);
  const [carouselState, setCarouselState] = useState({...carouselContext.state});
  useEffect(() => {
    function onChange() {
      setCarouselState({...carouselContext.state});
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  const Children = children


  return <Children {...carouselState} />
}

export default CarouselCustomProvider
