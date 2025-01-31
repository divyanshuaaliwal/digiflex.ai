import React from 'react';
import Am from '../../../../assets/Teac12.jpg';
import am2 from '../../../../assets//Teac2.jpg';
import am3 from '../../../../assets/Teac3.jpg';
import am4 from '../../../../assets/Teac4.jpg';
import am5 from '../../../../assets/Teac5.jpg';
import am6 from '../../../../assets/Teac6.jpg';
import am7 from '../../../../assets/Teac7.jpg';
import am8 from '../../../../assets/Teac8.jpg';
import am9 from '../../../../assets/Teac9.jpg';
import am10 from '../../../../assets/Teac10.jpg';
import am11 from '../../../../assets/Teac11.jpg';
import am12 from '../../../../assets/Teac13.jpg';

export default function Amp4() {
  const technologies = {
    frontend: [
      {
        icon: Am,
      },
      {
        icon: am2,
      },
      {
        icon: am3,
      },
      {
        icon: am4,
      },
    ],
    backend: [
      {
        icon: am5,
      },
      {
        icon: am6,
      },
      {
        icon: am7,
      },
      {
        icon: am8,
      },
    ],
    mobile: [
      {
        icon: am9,
      },
      {
        icon: am10,
      },
      {
        icon: am11,
      },
      {
        icon: Am,
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Technologies We Use</h2>
        <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
          Our team leverages cutting-edge technologies to build powerful solutions, ensuring quality and innovation in every project.
        </p>

        <div className="space-y-16">
          {/* Front-end Section */}
          <div>
            <h3 className="text-3xl font-semibold text-black mb-6">Front-end Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {technologies.frontend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt="Technology logo"
                    className="w-16 h-16 object-contain mb-4"
                  />
                  <span className="text-lg font-medium text-gray-800">Frontend Tech</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end Section */}
          <div>
            <h3 className="text-3xl font-semibold text-black mb-6">Back-end Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {technologies.backend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt="Technology logo"
                    className="w-16 h-16 object-contain mb-4"
                  />
                  <span className="text-lg font-medium text-gray-800">Backend Tech</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Section */}
          <div>
            <h3 className="text-3xl font-semibold text-black mb-6">Mobile Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {technologies.mobile.map((tech, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt="Technology logo"
                    className="w-16 h-16 object-contain mb-4"
                  />
                  <span className="text-lg font-medium text-gray-800">Mobile Tech</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 