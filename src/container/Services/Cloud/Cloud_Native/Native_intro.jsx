import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'
import cloud_nativ from '../../../../assets/Cloud_native.png'
import Paragraph from '../../../../Layout/Paragraph'

function Native_intro() {
  return (
    <WrapperContainer>
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <Heading>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
            Cloud Native Services
          </h1>
        </Heading>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Paragraph>
              <p className="text-base md:text-lg">
                Cloud-native services are designed to optimize applications for scalability, 
                flexibility, and automation in modern cloud environments. These services 
                utilize containers, microservices, DevOps, serverless computing, and 
                AI-driven automation to enhance application deployment and management.
              </p>
              <p className="mt-4 text-base md:text-lg">
                Becoming "cloud native" is often cited as the end goal for migrating 
                or building applications today. But depending on who you ask, you'll 
                probably get a lot of different definitions of what exactly it means. 
                Overall, the majority boils down to this: Cloud native is an approach 
                to building and running scalable applications to take full advantage 
                of cloud-based services and delivery models.
              </p>
            </Paragraph>
          </div>

          <div className="w-full md:w-1/2">
            <img 
              src={cloud_nativ} 
              alt="Cloud Native" 
              className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}

export default Native_intro