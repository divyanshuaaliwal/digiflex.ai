import React from "react";
import bg14 from '../../../../assets/bg14.jpg';
import bg6 from "../../../../assets/bg6.png"; 


const Mobile3 = () => {
  const arr3 = 'https://i.pinimg.com/736x/f8/91/11/f891114391b563ea7ceb7ab3dd712259.jpg';
  const arr4 = 'https://i.pinimg.com/736x/45/26/9d/45269d6a36b14be5e2d650069c96abce.jpg';
  const arr2 = 'https://i.pinimg.com/736x/20/35/f2/2035f251301bf9848e93f802413435b6.jpg';
  const arr = 'https://i.pinimg.com/736x/11/90/34/1190346b604a8e9b6e6179e7df234ef6.jpg';
  const services = [
    { imgSrc: bg14, text: "Application Porting & Migration Assessment" },
    {
      imgSrc: bg6,
      text: "Application re-engineering for better business functionality and faster operation",
    },
    { imgSrc: arr, text: "Data migration" },
    {
      imgSrc: arr2,
      text: "Upgrade Application within the same operating environment",
    },
    { imgSrc: arr3, text: "Technology migration" },
    { imgSrc: arr4, text: "Cloud migration & transition" },
  ];

  return (
    <div className="bg-[#1A2E6F] text-white p-8">
      <h1 className="text-center text-2xl font-bold mb-4">
        How do we achieve success in Integration Migration Services?
      </h1>
      <p className="text-center mb-8">
        At Digiflex.ai, we ensure success in integration and migration services
        by leveraging advanced tools and technologies to deliver reliable,
        efficient, and scalable solutions. Our approach includes: Expertise in
        Data Migration Tools: We work with industry-standard tools like
        DataLoader and cutting-edge third-party ETL tools such as Talend and
        Jitterbit to streamline data transfer and ensure accuracy during
        migrations. Seamless API Integration: By utilizing REST and SOAP APIs,
        we synchronize your data effortlessly across systems, ensuring seamless
        communication between platforms. Client-Centric Strategies: Our team
        collaborates closely with clients to understand their unique
        requirements, designing custom solutions that mitigate risks and
        guarantee data integrity during migration. Proven Track Record: Through
        meticulous planning and execution, we’ve consistently delivered
        successful integration and migration projects that empower businesses to
        unlock the full potential of their digital ecosystems. Digiflex.ai
        stands as a trusted partner, delivering innovative solutions that drive
        business success in the ever-evolving digital landscape.{" "}
      </p>
      <div className="flex justify-center mb-8">
        <img src={bg6} alt="Mobile Graphic" className="w-[290px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg flex flex-col items-center"
          >
            <div className="bg-black p-2 rounded-full mb-4">
              <img
                src={service.imgSrc}
                alt={service.text}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-center">
              {service.text}
            </h2>
            <p className="text-black text-center">
              Digiflex.ai specializes in evaluating application ecosystems for
              seamless porting and migration. Our detailed assessment ensures
              compatibility, risk mitigation, and optimal performance, enabling
              businesses to transition applications efficiently while minimizing
              downtime and maximizing scalability in modernized environments.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile3;
