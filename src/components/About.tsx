import React from "react";
import { CheckCircle, Headphones, BarChart, Link as LinkIcon } from "lucide-react";
import profileimg from '../assets/profile-img.jpg'

const about = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-black text-white">
      {/* Left Image with Overlay Card */}
      <div className="relative">
       <img src={profileimg} alt="" />
        {/* Overlay Card */}
        <div className="absolute top-6 left-6 bg-white shadow-md rounded-xl p-4 w-64">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Sales Performance Overview
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Completed</span>
              <span className="font-medium">81.7%</span>
            </li>
            <li className="flex justify-between">
              <span>In Progress</span>
              <span className="font-medium">71.5%</span>
            </li>
            <li className="flex justify-between">
              <span>Planned</span>
              <span className="font-medium">62.3%</span>
            </li>
            <li className="flex justify-between">
              <span>Delayed</span>
              <span className="font-medium">51.9%</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Customer-Driven Solutions with Xentrix
        </h2>
        <p className="text-gray-600 mb-6">
          At Xentrix, we focus on delivering tailored solutions that meet your
          customers’ needs. With advanced technology and AI-powered CRM systems,
          we help businesses build stronger customer relationships.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600 w-5 h-5" />
            <span>Personalized Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="text-green-600 w-5 h-5" />
            <span>Smart Data Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="text-green-600 w-5 h-5" />
            <span>Seamless Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="text-red-600 w-5 h-5" />
            <span>24/7 Customer Support</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">200+</h3>
            <p className="text-sm text-gray-600">Business Partners</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">30K+</h3>
            <p className="text-sm text-gray-600">Satisfied Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">10+</h3>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
