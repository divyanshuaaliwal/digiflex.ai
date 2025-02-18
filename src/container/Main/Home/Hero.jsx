import React from 'react'

function App() {

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 animated-gradient z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex items-center">
          <div className="max-w-2xl flex-1">
            <h1 className="text-5xl text-white md:text-8xl font-bold leading-tight mb-8">
              Conversion
              <br />
              Through
              <br />
              Immersion
            </h1>
            <a 
              href="#discover"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Discover what we do
            </a>
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default App