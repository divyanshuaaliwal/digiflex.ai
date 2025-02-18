import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'
import Paragraph from '../../../../Layout/Paragraph'
import Optimization from '../../../../assets/Optimization.webp'

function Optimization_overview() {
  return (
    <WrapperContainer>
        <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
        <Heading>
          Overview of Cloud Optimization
          </Heading>
        </h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        <img 
          src={Optimization} 
          alt="Optimization" 
          className="w-full md:w-80 h-auto max-w-full"
        />
        <Paragraph className="leading-9 text-justify">
          As businesses increasingly shift their data, applications, storage, and infrastructure 
          to the cloud, optimizing cloud resources becomes essential for maintaining efficiency and 
          cost-effectiveness. Cloud optimization involves strategically managing and allocating 
          cloud services to enhance performance while eliminating unnecessary expenses. 

          Without proper optimization, organizations may face “cloud sprawl,” leading to wasted 
          resources and inflated costs. By implementing effective optimization strategies, companies 
          can ensure they are making the most of their cloud investments. 

          This overview explores the concept of cloud optimization, its key advantages, and the best 
          practices for achieving cost-efficient and high-performing cloud environments. It involves 
          strategic planning, monitoring, and adjustments to ensure that cloud resources are used 
          efficiently while maintaining high performance and availability.
        </Paragraph>
      </div>
    </WrapperContainer>
  )
}

export default Optimization_overview
