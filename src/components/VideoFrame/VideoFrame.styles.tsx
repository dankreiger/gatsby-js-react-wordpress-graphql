import styled from 'styled-components'

export const VideoFrameLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`
export const ResponsiveIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 5%;
    width: 90%;
    height: 100%;
    border: 0;
  }
`
