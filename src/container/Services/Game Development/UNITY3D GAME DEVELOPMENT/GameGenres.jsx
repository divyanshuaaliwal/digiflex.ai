import React from 'react';
import { Circle } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const GenreButton = ({ genre }) => {
  return (
    <button className="group flex items-center space-x-3 p-4 rounded-full border  blue-600 hover:border-blue-600 transition-all duration-300 w-full">
      <div className="flex-shrink-0">
        <Circle className="w-6 h-6 text-blue-600  group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors duration-300">
        {genre}
      </span>
    </button>
  );
};

const GameGenres = () => {
  const genres = [
    "STRATEGY", "ARCADE", "RPG", "SHOOTER", "MULTIPLAYER", "SINGLE",
    "SPORTS", "BOARD", "CASINO", "PUZZLE", "ACTION", "MOBA",
    "MMORPG", "AR", "SIMULATION", "TRIVIA", "ADVENTURE", "CARD"
  ];

  return (
   

        <WrapperContainer>
                  <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <Heading>GAME GENRES WE HAVE CREATED</Heading>


          

          <Subheading>Although we develop all types of games for almost every industry and niche, 
            we specialize in the development of the following category of games.
         
         </Subheading>

        </div>

        {/* Genres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre, index) => (
            <div key={index} className="w-full">
              <GenreButton genre={genre} />
            </div>
          ))}
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, orange 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      </WrapperContainer>

  );
};

export default GameGenres;