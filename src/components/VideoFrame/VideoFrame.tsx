import React, { useState } from 'react'
import {
  ResponsiveIframeContainer,
  VideoFrameLoading,
} from './VideoFrame.styles'
import YouTube from 'react-youtube'
import Spinner from '../Spinner/Spinner'

const VideoFrame = ({
  videoId,
  onPlay,
}: {
  videoId: string
  onPlay: (e: any) => void
}) => {
  const [videoReady, setVideoReady] = useState(false)
  return (
    <>
      {!videoReady && (
        <VideoFrameLoading>
          {' '}
          <Spinner />{' '}
        </VideoFrameLoading>
      )}
      <ResponsiveIframeContainer>
        <YouTube
          videoId={videoId}
          onPlay={onPlay}
          onReady={() => setVideoReady(true)}
        />
      </ResponsiveIframeContainer>
    </>
  )
}

export default VideoFrame
