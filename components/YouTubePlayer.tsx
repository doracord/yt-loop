'use client'

import YouTube from 'react-youtube'
import { useEffect, useRef } from 'react'

type Props = {
  videoId: string
  loop: boolean
}

export default function YouTubePlayer({ videoId, loop }: Props) {
  const playerRef = useRef<any>(null)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  const onReady = (event: any) => {
    playerRef.current = event.target
  }

  const onEnd = () => {
    if (loop && playerRef.current) {
      playerRef.current.seekTo(0)
      playerRef.current.playVideo()
    }
  }

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />
}