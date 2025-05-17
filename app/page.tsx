'use client'

import { useState } from 'react'
import YouTubePlayer from '@/components/YouTubePlayer'
import { Metadata } from 'next'

export const MetaData: Metadata = {
  title: "YouTube Loop",
  description: "Simple YouTube video looper"
}

export default function Home() {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState<string | null>(null)
  const [loop, setLoop] = useState(false)

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&\n]+)/)
    return match ? match[1] : null
  }

  const handleLoop = () => {
    const id = extractVideoId(url)
    if (id) {
      setVideoId(id)
      setLoop(true)
    } else {
      alert('Please enter the correct YouTube URL.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">YouTube Loop</h1>
      <div className='flex space-x-2'>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="w-full max-w-md p-2 border rounded"
        />
        <button
          onClick={handleLoop}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Loop
        </button>
      </div>

      {videoId && (
        <div className="mt-8">
          <YouTubePlayer videoId={videoId} loop={loop} />
        </div>
      )}
    </div>
  )
}
