import React from 'react';
import Benefits from './Benefits';
import Services from './Services';
import WhyChoose from './WhyChoose';
import Industries from './Industries';

function Body() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-blue-900">
            A game-changing strategy for your app idea
          </h1>
          <p className="text-gray-700 mb-8 mx-auto">
            In today's competitive digital landscape, millions of apps flood the app stores, but only a few rise to the top, becoming editors' favorites or securing billion-dollar deals. The difference lies in having the right strategy a well-crafted approach that ensures a mobile app not only meets user expectations but also stands out in the market.
            <br/><br/>
            At Digiflex.ai, we specialize in crafting winning strategies for mobile app development and optimization. From innovative design to seamless functionality, our solutions empower businesses to turn their app ideas into market leaders.
            <br/><br/>
            Let us help you unlock your app's true potential.
          </p>
        </div>
      </div>

      <Benefits />
      <Services />
      <WhyChoose />
      <Industries />
    </div>
  );
}

export default Body;