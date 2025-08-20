import React, { useState, useEffect } from "react";
import { CheckCircle, Headphones, BarChart, Link as LinkIcon } from "lucide-react";
import { apiClient } from '@/lib/api';

const About = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiClient.getProfile();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Customer-Driven Solutions with Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {profile?.bio || "I focus on delivering tailored solutions that meet your customers' needs. With advanced technology and innovative approaches, I help businesses build stronger relationships and achieve their goals."}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Personalized Engagement</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border">
                <BarChart className="text-blue-600 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Smart Data Analytics</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border">
                <LinkIcon className="text-purple-600 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Seamless Integration</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border">
                <Headphones className="text-orange-600 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border">
                <h4 className="text-2xl font-bold text-primary mb-1">
                  {profile?.stats?.businessPartners || 200}+
                </h4>
                <p className="text-sm text-muted-foreground">Business Partners</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border">
                <h4 className="text-2xl font-bold text-primary mb-1">
                  {profile?.stats?.satisfiedCustomers ? `${Math.floor(profile.stats.satisfiedCustomers / 1000)}K` : '30K'}+
                </h4>
                <p className="text-sm text-muted-foreground">Satisfied Customers</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border">
                <h4 className="text-2xl font-bold text-primary mb-1">
                  {profile?.stats?.yearsExperience || 10}+
                </h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image with Overlay Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {profile?.profileImage ? (
                <img 
                  src={profile.profileImage} 
                  alt="Profile" 
                  className="w-full h-[500px] object-cover"
                />
              ) : (
                <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {(profile?.name || 'EA').split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Profile Image</p>
                  </div>
                </div>
              )}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Overlay Card */}
            <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm shadow-lg rounded-xl p-4 w-64 border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Performance Overview
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Project Success</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
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

export default About;
