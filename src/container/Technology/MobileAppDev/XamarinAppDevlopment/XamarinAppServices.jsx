import React from 'react';

const XamarinAppServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4" style={{ color: '#172554' }}>
            🛠 3. Our Xamarin App Development Services
          </h2>
          <p className="text-gray-700 text-lg">
            Discover how our specialized services can elevate your mobile strategy.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">📱</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Custom Xamarin App Development
              </h3>
              <p className="text-gray-600 mt-2">
                Tailor-made business solutions.
              </p>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔄</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Xamarin App Migration & Modernization
              </h3>
              <p className="text-gray-600 mt-2">
                Upgrade legacy apps to Xamarin.
              </p>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🎨</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Native UI/UX with Xamarin.Forms
              </h3>
              <p className="text-gray-600 mt-2">
                Stunning, high-performing user interfaces.
              </p>
            </div>
          </div>
          {/* Service Card 4 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">📡</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Backend & API Integration
              </h3>
              <p className="text-gray-600 mt-2">
                Azure, REST APIs, GraphQL, Firebase.
              </p>
            </div>
          </div>
          {/* Service Card 5 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🛠️</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Xamarin App Testing & Debugging
              </h3>
              <p className="text-gray-600 mt-2">
                Performance tuning & security audits.
              </p>
            </div>
          </div>
          {/* Service Card 6 */}
          <div className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mr-4">🔧</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Post-Launch Maintenance & Support
              </h3>
              <p className="text-gray-600 mt-2">
                Continuous improvements & updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XamarinAppServices;
