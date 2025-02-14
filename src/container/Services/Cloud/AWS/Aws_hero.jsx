import React from "react";
import video from "../../../../assets/Google_video.mp4";
import AWS_logo from "../../../../assets/AWS_logo.avif";

function Aws_hero() {
  return (
    <div className="relative w-full h-[640px] overflow-hidden">
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
        <p className="text-[50px] font-bold">AWS (Amazon Web Services)</p>
        <p className="mt-2 max-w-[600px]">
          AWS is a cloud computing platform offered by Amazon, providing a wide range of 
          cloud services such as computing power, storage, databases, machine learning, 
          security, and networking.
        </p>
        <img src={AWS_logo} alt="AWS Cloud" className="w-[100px] mt-4" />
      </div>
    </div>
  );
}

export default Aws_hero;
