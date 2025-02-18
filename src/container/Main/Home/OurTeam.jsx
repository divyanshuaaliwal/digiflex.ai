import React from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer';


const teamMembers = [
  {
    id: 1,
    name: 'Tuhinanshu Jain',
    role: 'Managing Director',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/ttj3.png'
  },
  {
    id: 2,
    name: 'Hemraj Prajapat',
    role: 'Marketing Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/hemusir111.png'
  },
  {
    id: 3,
    name: 'Tanish Sharma',
    role: 'Project Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/tanishsir.jpeg'
  },
  {
    id: 4,
    name: 'Shubham Jat',
    role: 'Business Development Manager',
    image: 'https://digiflex.ai/img/1704269389180.jpg'
  }
];

function TeamSection() {
  return (
    <WrapperContainer>
    <div className="h-full ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 sm:text-5xl">
            Our people <span className='text-blue-700'>make us</span> great
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            You'll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-lg text-gray-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
}

export default TeamSection;