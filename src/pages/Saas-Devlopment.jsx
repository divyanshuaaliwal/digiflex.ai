import React from "react";
import Saas2 from "../container/Services/Custom App/Saas Devlopment/Saas2";
import Saas3 from "../container/Services/Custom App/Saas Devlopment/Saas3";
import Saas4 from "../container/Services/Custom App/Saas Devlopment/Saas4";
import Saas5 from "../container/Services/Custom App/Saas Devlopment/Saas5";
import bg19 from "../assets/bg19.jpg";
const Saas = () => {
  const clients = [
    {
      name: "Universal",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s",
    },
    {
      name: "NHS",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s",
    },
    {
      name: "Guinness",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s",
    },
    {
      name: "E-commerce",
      src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png",
    },
    {
      name: "EY",
      src: "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt3f899c1015331339/65033d0da54b2d514f4ee54d/News_Image_(29).png?disable=upscale&width=1200&height=630&fit=crop",
    },
    {
      name: "KJK",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gIQh5O_TtAyH-7PDk5c5QLEDebLYHvyrqA&s",
    },
    {
      name: "Big Fish",
      src: "https://static.vecteezy.com/system/resources/previews/017/453/211/non_2x/big-fish-fishing-logo-symbol-vector.jpg",
    },
    {
      name: "Land Rover",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/LandRover.svg/1280px-LandRover.svg.png",
    },
    {
      name: "Jaguar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zFe_XXGEp6u7ZlanA2-VHE6L9TGadcpKeg&s",
    },
    {
      name: "Disney",
      src: "https://logos-world.net/wp-content/uploads/2021/05/Disney-Logo-2019-2024.png",
    },
    {
      name: "Guest Services",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIwLX6rNkEBxCYMmXFfKD64GYF_Ey7pT1Jw&s",
    },
    {
      name: "Citrix Insight",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoE5NuLcau2VI3jjWNqxQMvpuFYDTiB2CTA&s",
    },
    {
      name: "Floosbaa",
      src: "https://c8.alamy.com/comp/JDJ03A/buffalo-logo-JDJ03A.jpg",
    },
    {
      name: "AF",
      src: "https://t4.ftcdn.net/jpg/03/69/72/19/360_F_369721953_gnmcVNIj0twArEOz2DW9pMCwdOcfbiW7.jpg",
    },
    {
      name: "Wynn",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50oYLSFdMv-HATRKnCAkjkNLp_EIVS3-zxg&s",
    },
    {
      name: "Melco",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGj0laBe3P1oCXQVj0FS0j2t_QA2orFfnuvg&s",
    },
    {
      name: "Euro",
      src: "https://static-00.iconduck.com/assets.00/euro-symbol-icon-512x512-y0j8x7ac.png",
    },
    {
      name: "Bombardier",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZSfq5zb8zxxuLfEKgtWTSh1QI2Wo27hVAQ&s",
    },
    {
      name: "Nestle",
      src: "https://banner2.cleanpng.com/20180830/jfo/kisspng-logo-nestl-milk-chocolate-nestl-milk-chocolate-nestl-logo-svg-vector-amp-png-transparent-ve-1713946579491.webp",
    },
    {
      name: "Clinique",
      src: "https://images.squarespace-cdn.com/content/v1/5e20c0afa2db92534e6462ac/1621963352624-27YVJS3JOPZA3RIC1A13/connect-with-clinique",
    },
    {
      name: "Harley Davidson",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6h_Bkw88i4dEk1VNGnk3IDD5EEJeOBP4bA&s",
    },
    {
      name: "Eagle",
      src: ""},
    {
      name: "Audi",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicsqLpfiC2dghzPHkCdJxPt4-nZKuhZ0oHQ&s",
    },
    {
      name: "Giant",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    },
  ];

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-screen">
          <div className="absolute inset-0">
            <img
              src={bg19}
              alt="SaaS Development Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-24 text-white">
            <div className="bg-blue-600 text-white text-sm px-3 py-1 inline-block mb-4">
              SERVICES
            </div>

            <h1 className="text-5xl font-bold mb-6">
              SAAS DEVELOPMENT SERVICES
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed mb-8">
              Since 2007, Intellectsoft has been building impactful SaaS
              solutions, enterprise software, and big-scale products for top
              organizations, SMBs, and well-funded startups in over 20
              industries. Leverage our SaaS development services to create a
              revenue-generating SaaS solution of any scale, from a web-based
              app to an entire platform.
            </p>

            {/* Call to Action (Optional) */}
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Clients Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OUR CLIENTS
            </h2>
            <p className="text-gray-600">
              The world's most established companies trust Intellectsoft's
              software development expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Saas2 />
      <Saas3 />
      <Saas4 />
      <Saas5/>
     
    </>
  );
};

export default Saas;
