import React from 'react'
import { SlickButtonContainer } from './SiteSlider.styles'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

interface SetVideoPlaying {
  stopVideo: () => null
}

export const sliderSettings = (
  videoPlaying: SetVideoPlaying,
  setVideoPlaying: (arg0: SetVideoPlaying) => void
) => ({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <SlickButtonContainer>
      <FaChevronCircleLeft />
    </SlickButtonContainer>
  ),
  nextArrow: (
    <SlickButtonContainer>
      <FaChevronCircleRight />
    </SlickButtonContainer>
  ),
  beforeChange: () => {
    videoPlaying.stopVideo()
    setVideoPlaying({ stopVideo: () => null })
  },
})
