import React from "react";
import bg9 from '../../../../assets/bg9.png'; // Correct image path
import { Link } from "react-router-dom";

export default function Website5() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Best Website Development Services In India- Affordable Yet Best!
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Pricing Tables */}
        <div className="p-6 border rounded-lg">
          <img
            src={bg9}
            alt="Website Development Cost Breakdown"
            width="500"
            height="300"
            className="w-full h-auto"
          />

          <div className="space-y-4 mt-6">
            <div className="flex justify-between border-b pb-2">
              <span>Website Design</span>
              <span className="font-semibold">Rs 6000- 40000</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Website Maintenance</span>
              <span className="font-semibold">Rs. 3000- 12000/Year</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Website Marketing</span>
              <span className="font-semibold">Rs. 20000- 60000/Month</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>If Hire Any Agency/Freelancer</span>
              <span className="font-semibold">Rs 2000- 25000</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Website Maintenance By Agency</span>
              <span className="font-semibold">Rs. 2000- 10000/Year</span>
            </div>
          </div>
        </div>

        {/* Right side - Business Types Table */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">WEBSITE DEVELOPMENT COST FROM RANKON</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">BUSINESS TYPE</th>
                  <th className="text-left py-2">COST</th>
                  <th className="text-left py-2">ANNUAL WEBSITE MAINTENANCE COST</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Informational Website</td>
                  <td className="py-2">Rs. 600-1500 Per Year</td>
                  <td className="py-2">3 Pages (Rs.2500-5000)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Business Website</td>
                  <td className="py-2">Rs. 1500-2000 Per Year</td>
                  <td className="py-2">5-10 Pages (Rs.5000-10000)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">E-commerce Website</td>
                  <td className="py-2">Rs. 3000-5000 Per Year</td>
                  <td className="py-2">Up to 10 Products (Rs.15000)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Website Application</td>
                  <td className="py-2">Rs. 5000-10000 Per Year</td>
                  <td className="py-2">2-10 Web Pages (Rs.45000)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center space-y-4">
        <p className="text-gray-800">
          Don't wait and contact India's leading website development company{" "}
          <Link to="#" className="text-red-600 hover:text-red-700 font-semibold">
            RANKON Technologies
          </Link>{" "}
          now. Click on the link to know how much does it{" "}
          <Link to="#" className="text-red-600 hover:text-red-700 font-semibold">
            cost to create a website
          </Link>{" "}
          in India. Contact us for more details!
        </p>

        {/* WhatsApp Icon */}
        <Link
          to="#"
          className="inline-block bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 21l1.9-5.7a8.5 8.5 0 113.4 3.4z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
