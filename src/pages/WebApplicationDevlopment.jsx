import imagg from '../assets/progressive-app-concept-illustration-b.png';
import Application2 from '../container/Services/Custom App/Web Application Devlopment/Application2';
import Application3 from '../container/Services/Custom App/Web Application Devlopment/Application3';
import Application4 from '../container/Services/Custom App/Web Application Devlopment/Application4';
import Application5 from '../container/Services/Custom App/Web Application Devlopment/Application5';



export default function Application() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-[#172554] text-white p-8 rounded-lg shadow-lg w-full h-screen">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img 
            src={imagg} 
            alt="Descriptive Alt Text" 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-white mb-4">Custom Web App Development Services</h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            At Digiflex, we specialize in building scalable and secure custom web applications tailored to meet your business needs. 
            Our expert team ensures seamless functionality, user-friendly interfaces, and innovative solutions to drive success.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Render Additional Sections */}
      <Application2 />
      <Application3 />
      <Application4 />
      <Application5 />
     
    </>
  );
}
