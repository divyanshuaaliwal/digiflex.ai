import React from 'react'
import video from "../../../../assets/Google_video.mp4";
import AWS_logo from '../../../../assets/AWS_logo.avif';
import Azore_intro from '../../../../assets/Azore_intro.png';
import Google_Cloud_Logo from '../../../../assets/Google-Cloud-Logo.png'

function Optimization_hero() {
  return (
    <>
        <div className="relative w-full h-[600px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Centering the content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center">
        <p className="text-[50px] font-bold">CLOUD OPTIMIZATION</p>
        <p className="mt-2 max-w-[600px]">
        Cloud Optimization refers to the process of improving the performance, cost-efficiency, and resource utilization of cloud computing environments.
        </p>
        <div className="flex gap-5">
  {/* <img src={AWS_logo} alt="AWS_logo" className="w-20 h-auto object-contain"/> */}
  <img src={Azore_intro} alt="Azore_intro" className="w-52 h-auto  object-contain"/>
  <img src={Google_Cloud_Logo} alt="Google_Cloud_Logo" className="w-52 h-auto object-contain"/>
</div>

      </div>
    </div>
    </>  
    )
}

export default Optimization_hero