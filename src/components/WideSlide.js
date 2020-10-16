import React, { useEffect, useMemo, useRef, useState } from 'react'
import concatClassModifiers from '../helpers/concatClassModifiers.js'
import hexToRgb from '../helpers/hexToRgb.js'
import { ButtonNext, DotGroup } from 'pure-react-carousel'
import { Button, ButtonToolbar, Icon } from 'rsuite'

function WideSlide({ slide, visible }) {
  const [showVideo, setShowVideo] = useState(false)
  const overlayColor = slide.color || '#a02f27'
  const [slideDelay, setSlideDelay] = useState(10)
  const nextButtonRef = useRef(null)
  const [delay, setDelay] = useState(0)

  function handleVideoLoad(e) {
    const duration = e.currentTarget.duration
    setTimeout(() => {
      setSlideDelay(duration + 3)
      setShowVideo(true)
    }, 300)
  }
  function handleVideoEnded() {
    setShowVideo(false)
  }

  useEffect(() => {
    setShowVideo(false)
  }, [visible])

  useEffect(() => {
    clearTimeout(delay)
    if (visible) {
      setDelay(setTimeout(() => {
        nextButtonRef.current.instance.handleOnClick()
      }, slideDelay * 1000))
    }
    return () => {
      clearTimeout(delay)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideDelay, visible])

  const shadowStyle = useMemo(() => {
    const rgb = hexToRgb(overlayColor)
    const rgbFormat = `${rgb.r}, ${rgb.g}, ${rgb.b}`
    return {
      background: `linear-gradient(93deg, rgba(${rgbFormat}, 1) 0%, rgba(${rgbFormat}, .7) 440px, rgba(${rgbFormat}, 0) 100%)`,
    }
  }, [overlayColor])

  const dotsStyle = useMemo(() => {
    return {
      animationDuration: slideDelay + 's'
    }
  }, [slideDelay])


  return (
    <div className={concatClassModifiers('wide_slide', 'use_shadow', (showVideo && 'show_video'))} data-color='#ff0000'>
      {slide.video && visible && (
        <div className="wide_slide__video">
          <video
            onCanPlay={handleVideoLoad}
            onEnded={handleVideoEnded}
            src={slide.video}
            autoPlay={visible}
            muted
            playsInline
          />
        </div>
      )}
      <div className="wide_slide__poster">
        <img src={slide.img} alt=""/>
      </div>
      <div className="wide_slide__gradient_overlay" style={shadowStyle}/>
      <div className="container wide_slide__container">
        <div className="wide_slide__content">
          <div className="wide_slide__heading">
            {slide.logo ? (
              <div className='wide_slide__logo'>
                <img src={slide.logo} alt={slide.title} />
              </div>
            ) : (
              <h2>{slide.title}</h2>
            )}
          </div>
          <div className="wide_slide__info">
            {slide.description}
          </div>
        </div>
        <div className="d-flex wide_slide__buttons mt-4">
          <ButtonToolbar>
            <Button color='brand' size='lg'><Icon icon='play' className='mr-2'/> Смотреть</Button>
            <ButtonNext ref={nextButtonRef} className='rs-btn rs-btn-subtle rs-btn-lg rs-btn-default'><Icon icon='fast-forward'/> Следующий</ButtonNext>
          </ButtonToolbar>
        </div>
        <DotGroup className='wide_slide__dot_group mt-4' style={dotsStyle} />
      </div>
    </div>
  )
}

export default WideSlide
