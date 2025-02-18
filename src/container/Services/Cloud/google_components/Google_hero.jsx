import React from 'react';
import video from '../../../../assets/Google_video.mp4'
import google_img from '../../../../assets/Google-Cloud-Logo.png'

function Google_hero() {
  return (
    <>
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
            Gogle cloud 
          </p>
          <p className="mt-2 max-w-[600px]">Google Cloud is a suite of cloud computing services provided by Google.It offers scalable computing, storage, and machine learning solutions backed by Google's robust infrastructure.</p>
          <img src={google_img} alt='google cloud' className='w-1/6 '/>
        </div>
        </div>
    </>
  )
}

export default Google_hero