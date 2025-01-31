import React from 'react';
import { PhoneCall, ArrowUp, MoveRight } from 'lucide-react';

const Saas3 = () => {
  const caseStudies = [
    {
      image: 'https://i.pinimg.com/736x/70/c9/80/70c980f3001190ad5f829b5018a06215.jpg',
      tag: 'WEBSITE DEVELOPMENT',
      title: 'Panasonic Sign-Edge'
    },
    {
      image: 'https://i.pinimg.com/736x/c8/22/f8/c822f8d970d9419ffbf048d49e002e3f.jpg',
      tag: 'UI/UX DESIGN',
      title: 'MamyPoko'
    },
    {
      image: 'https://i.pinimg.com/736x/04/8b/47/048b471216515fc73c0d23cb6917864b.jpg',
      tag: 'UI/UX DESIGN',
      title: 'Panasonic eCareWiz'
    },
    {
      image: 'https://i.pinimg.com/736x/18/2d/3e/182d3e102f2021cab86cd224323cd741.jpg',
      tag: 'UI/UX DESIGN',
      title: 'KFC Recruitment App'
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-900">
              Our<br />
              Case Studies
            </h2>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors">
            View More Portfolios
            <MoveRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={study.image}
                alt={study.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-white bg-black/30 px-3 py-1 rounded-full">
                    {study.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-medium">{study.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
};

export default Saas3;