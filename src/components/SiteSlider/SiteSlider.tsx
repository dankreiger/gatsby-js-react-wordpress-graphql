import React, { FunctionComponent, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SlickButtonContainer } from './SiteSlider.styles'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import VideoFrame from '../VideoFrame/VideoFrame'
import { sliderSettings } from './sliderSettings'

interface SiteSliderProps {
  videoIds: string[]
}

const SiteSlider: FunctionComponent<SiteSliderProps> = ({ videoIds }) => {
  console.log('videoIds', videoIds)
  const [videoPlaying, setVideoPlaying] = useState({ stopVideo: () => null })
  const onPlay = (e: any) => {
    setVideoPlaying(e.target)
  }
  const settings = sliderSettings(videoPlaying, setVideoPlaying)
  return (
    <Slider {...settings}>
      {videoIds.map(videoId => (
        <VideoFrame key={videoId} onPlay={onPlay} videoId={videoId} />
      ))}
    </Slider>
  )
}

export default SiteSlider
