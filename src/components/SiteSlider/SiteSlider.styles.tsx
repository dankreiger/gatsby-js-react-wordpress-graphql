import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const SlickButtonContainer: any = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: {
  currentSlide: number
  slideCount: number
  children: ReactNode
}) => <SiteSliderArrow {...props}>{children}</SiteSliderArrow>

const SiteSliderArrow = styled.span`
  color: white;
  z-index: 1;
  &.slick-prev,
  &.slick-next {
    height: 50px;
    width: 50px;
    &:before {
      font-size: 50px;
      color: white;
      transition: color 250ms;
    }
    &:hover {
      &:before {
        color: #ccc;
      }
    }
    &:active {
      &:before {
        color: #666;
      }
    }
  }
  &.slick-prev {
    left: 0;
  }
  &.slick-next {
    right: 0;
  }
`
