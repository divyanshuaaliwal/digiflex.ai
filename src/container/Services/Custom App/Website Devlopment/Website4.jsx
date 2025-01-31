import React from 'react';

const packages = [
  {
    title: "STARTUP WEBSITE",
    price: "10,000 INR/ 150 USD",
    subtitle: "Best for Startups",
    buttonText: "Startup Plan",
    bgColor: "bg-[#172554]", // Custom blue background color
  },
  {
    title: "SMALL BUSINESS",
    price: "20,000 INR/ 250 USD",
    subtitle: "Best for Small Business",
    buttonText: "Small Business Plan",
    bgColor: "bg-[#172554]",
  },
  {
    title: "ECOMMERCE WEBSITE",
    price: "35,000 INR/ 420 USD",
    subtitle: "Best for Large Business",
    buttonText: "Ecommerce Website Plan",
    bgColor: "bg-[#172554]",
  },
];

const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} px-6 py-3 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default function Website4() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#172554]">
            Our Website Development Packages
          </h2>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`${pkg.bgColor} text-white text-center rounded-lg shadow-lg`}
              >
                <div className="space-y-4 pb-4 p-6">
                  {/* Icon (optional) */}
                  <div className="mx-auto bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-[#172554]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.309 0-9-3.691-9-9s3.691-9 9-9 9 3.691 9 9-3.691 9-9 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                  <div className="text-2xl font-bold">{pkg.price}</div>
                  <p className="text-sm">{pkg.subtitle}</p>
                  <Button className="bg-[#172554] hover:bg-[#0f1e3e]">
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistic Banner */}
        <div className="bg-[#172554] text-white py-3 px-6 rounded-full text-center">
          <p className="font-medium">
            (64%) Of Small Businesses Have A Website! Do You Have One?
          </p>
        </div>

        {/* Value Proposition */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#172554]">
            Does It Make A Value To Get A Business Website Development Service?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-700">
                Hire RankON Technologies- A leading website development company
                in India for top-rated mobile responsive and SEO-friendly website
                development services. More than{" "}
                <span className="font-bold">60% of small businesses</span> have a
                website, whereas{" "}
                <span className="font-bold">30% of small businesses</span> with a
                web presence make more than{" "}
                <span className="font-bold">25%</span> of their revenue online.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-cyan-400 p-4 rounded-lg text-white text-center">
                <p className="font-semibold">Listen</p>
              </div>
              <div className="bg-pink-500 p-4 rounded-lg text-white text-center">
                <p className="font-semibold">Design</p>
              </div>
              <div className="bg-yellow-400 p-4 rounded-lg text-white text-center">
                <p className="font-semibold">Develop</p>
              </div>
              <div className="bg-orange-400 p-4 rounded-lg text-white text-center">
                <p className="font-semibold">Testing</p>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg text-white text-center">
                <p className="font-semibold">Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" />
        </svg>
      </a>
    </section>
  );
}
