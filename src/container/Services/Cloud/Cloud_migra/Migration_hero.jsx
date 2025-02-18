import React from 'react'
import video from '../../../../assets/Google_video.mp4'


function Migration_hero() {
  return (
<div className="relative w-full h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative z-30 flex flex-col items-start justify-center h-full pl-[50px] text-white">
          <p className="text-[50px] uppercase">
          Cloud Migration
          </p>
          <p className="mt-2 max-w-[600px]">A platform, offering a wide range of services for building, deploying, and managing applications through Microsoft-managed data centers. It provides solutions in computing, storage,networking, AI, machine learning, DevOps, security, and more.</p>
        </div>
        </div>  )
}

export default Migration_hero