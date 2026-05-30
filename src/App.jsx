import React, { useState, useEffect } from 'react';
import FloatingSocialMedia from './components/FloatingSocialMedia';
import { Building2, Hammer, Home, Users, Award, Briefcase } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch (e) { return 'light'; }
  });

  useEffect(() => {
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-gray-900 text-white' : 'min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900'}>
      {/* Floating Social Media Component */}
      <FloatingSocialMedia
        position="bottom-right"
        theme={theme}
        showLabels={true}
        expandOnHover={true}
        social={{
          whatsapp: {
            enabled: true,
            link: 'https://wa.me/1234567890',
            label: 'Chat on WhatsApp'
          },
          instagram: {
            enabled: true,
            link: 'https://instagram.com/constructionapp',
            label: 'Follow on Instagram'
          },
          linkedin: {
            enabled: true,
            link: 'https://linkedin.com/company/constructionapp',
            label: 'Connect on LinkedIn'
          },
          facebook: {
            enabled: true,
            link: 'https://facebook.com/constructionapp',
            label: 'Like on Facebook'
          },
        }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Building2 className="text-blue-600" size={32} />
              <button
                onClick={() => window.location.reload()}
                className="text-2xl font-bold text-gray-900 bg-transparent border-0 p-0 m-0 cursor-pointer focus:outline-none"
                aria-label="Reload page"
                title="Reload page"
              >
                Ganapathi Constructions
              </button>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md"
                aria-label="Toggle theme"
                title="Toggle light/dark theme"
              >
                {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building Your Dreams With Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional construction services with a commitment to quality, safety, and customer satisfaction. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Start Your Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center shadow-2xl">
            <Building2 size={120} className="text-white opacity-50" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Residential Construction',
                description: 'Build your dream home with our expert residential construction services.'
              },
              {
                icon: Briefcase,
                title: 'Commercial Projects',
                description: 'From offices to retail spaces, we handle all commercial construction needs.'
              },
              {
                icon: Hammer,
                title: 'Renovations',
                description: 'Transform existing spaces with our professional renovation services.'
              },
              {
                icon: Users,
                title: 'Project Management',
                description: 'Complete project oversight ensuring timely and quality delivery.'
              },
              {
                icon: Award,
                title: 'Quality Assurance',
                description: 'Rigorous quality checks at every stage of construction.'
              },
              {
                icon: Building2,
                title: 'Consulting',
                description: 'Expert consultation for construction planning and design.'
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                  <Icon size={40} className="text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Connect with us today for a free consultation</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Ganapathi Constructions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
