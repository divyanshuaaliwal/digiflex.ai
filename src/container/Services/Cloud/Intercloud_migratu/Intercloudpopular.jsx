import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import bcm from '../../../../assets/intercloud_bmc.png';
import carbonite from '../../../../assets/intercloud_carbonite.png';
import clud from '../../../../assets/Intercloud_cloudEndure.jpg';
import flexera from '../../../../assets/intercloud_flexera.png';
import ibm from '../../../../assets/intercloud_ibm.png';
import river from '../../../../assets/intercloud_river.png';
import turbon from '../../../../assets/intercloud_turbon.png';
import vm from '../../../../assets/Intercloud_vm.webp';
import cloud from '../../../../assets/Google-Cloud-Logo.png';
import azore from '../../../../assets/Azore_intro.png';
import AWS_logo from '../../../../assets/AWS_logo.avif';

const images = [
    cloud, azore, AWS_logo, bcm, 
    carbonite, clud, flexera, 
    ibm, river, turbon, vm
];

function Intercloudpopular() {
  return (
    <WrapperContainer>
      <Heading>
        <h1>Popular Tools for Intercloud Migration</h1>
      </Heading>
      <div className="flex flex-col items-center space-y-10 p-10 w-full">
        <div className="grid grid-cols-4 gap-12 w-full max-w-5xl">
          {images.slice(0, 4).map((img, index) => (
            <div key={index} className="w-full h-28 md:h-36 lg:h-40 overflow-hidden rounded-lg bg-white p-2">
              <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        {/* Second Row - 3 images (Zigzag) */}
        <div className="grid grid-cols-3 gap-12 w-full max-w-4xl ml-10">
          {images.slice(4, 7).map((img, index) => (
            <div key={index} className="w-full h-28 md:h-36 lg:h-40 overflow-hidden rounded-lg bg-white p-2">
              <img src={img} alt={`Image ${index + 5}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        {/* Third Row - 4 images */}
        <div className="grid grid-cols-4 gap-12 w-full max-w-5xl">
          {images.slice(7, 11).map((img, index) => (
            <div key={index} className="w-full h-28 md:h-36 lg:h-40 overflow-hidden rounded-lg bg-white p-2">
              <img src={img} alt={`Image ${index + 8}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Intercloudpopular;