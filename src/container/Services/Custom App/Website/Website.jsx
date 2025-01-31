import React from 'react'
import Website2 from './Website2'
import Website3 from './Website3'
import Website4 from './Website4'
import Website5 from './Website5'

import { Menu, PhoneIcon as WhatsApp } from "lucide-react"
import bg13 from "../../../../assets/bg13.png" // Import your image

const Website = () => {
  return (
    <>
      <div className="bg-[#172554] min-h-screen">
        <div className="container mx-auto px-4 py-6">
          {/* Top Menu Bar */}
          <div className="flex items-center mb-8">
            <button className="bg-emerald-400 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
              <Menu size={16} />
              Menu
            </button>
            <div className="ml-4 bg-white/10 px-4 py-1 rounded-full">
              <p className="text-white text-sm">Best Website Development Services in India</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-white text-xl font-medium">Website Development Company In India</h2>
                <p className="text-white/80">Trusted by 500+ Clients</p>
              </div>

              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                Modern Website Development Services At Low Prices
              </h1>

              <p className="text-white/90 text-lg">
              Looking to create a modern website for your business or startup? Don’t wait! Hire RankON Technologies, a leading website development company in India, offering affordable and high-quality website development services. We specialize in building custom, responsive websites that enhance user experience, boost your brand, and drive business growth. Whether you're looking for an eCommerce platform, a corporate site, or a startup website, our experienced team uses cutting-edge technologies to deliver solutions tailored to your needs. Choose RankON Technologies for a professional, SEO-friendly, and visually appealing website that helps your business stand out. Take quick action and get started today!
              </p>

              {/* WhatsApp Button */}
              <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors p-3 rounded-full">
                <WhatsApp className="text-white w-6 h-6" />
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={bg13}
                alt="Website Development Services Illustration"
                width={600}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Website2/>
      <Website3/>
      <Website4/>
      <Website5/>
     

    </>
  )
}

export default Website
