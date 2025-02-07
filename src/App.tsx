import React from 'react';
import {
  Clock,
  Repeat,
  Phone,
  Calendar,
  Shield,
  Stethoscope as Hospital,
  User,
  Heart,
  AlertCircle,
  MessageSquare,
  Users,
  CheckCircle,
  ArrowRight,
  Ambulance,
  Brain,
  ShieldCheck,
  Calendar as CalendarIcon,
  Repeat as SwapIcon,
  Clock as QueueIcon,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Emergency Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-1 bg-red-600/30 rounded-full blur-sm group-hover:bg-red-600/50 transition-all duration-300" />
          <div className="absolute -inset-2 bg-red-600/20 rounded-full animate-pulse" />
          <button className="relative bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] shadow-lg flex items-center space-x-3">
            <Ambulance className="h-6 w-6 animate-bounce" />
            <span className="text-lg">24/7 Emergency Help</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Hospital className="h-8 w-8 text-blue-600 transform group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">MediQueue</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Features', 'Benefits', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Hospital Interior"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Smart Healthcare
              <span className="text-blue-600 block">Queue Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your hospital visit experience with real-time queue updates, 
              intelligent token management, and AI-powered emergency assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Hospital className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span className="ml-2">For Hospitals</span>
              </button>
              <button className="group bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <User className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                <span className="ml-2">For Patients</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Intelligent Healthcare Solutions
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Live Queue Updates */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <QueueIcon className="h-8 w-8 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Live Queue Updates</h3>
                <p className="text-gray-600 text-center">
                  Real-time queue position tracking with precise waiting time estimates
                </p>
              </div>
            </div>

            {/* Online Appointments */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <CalendarIcon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Online Appointments</h3>
                <p className="text-gray-600 text-center">
                  Easy scheduling and management of appointments with flexible cancellation
                </p>
              </div>
            </div>

            {/* Token Swapping */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <SwapIcon className="h-8 w-8 text-purple-600 group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Token Swapping</h3>
                <p className="text-gray-600 text-center">
                  Flexible queue position exchange with mutual consent system
                </p>
              </div>
            </div>

            {/* Enhanced Safety */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Enhanced Safety</h3>
                <p className="text-gray-600 text-center">
                  Reduced exposure time in waiting areas for better infection control
                </p>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300 md:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg text-sm">
                  24/7 Support
                </div>
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <Brain className="h-8 w-8 text-red-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">AI Emergency Support</h3>
                <p className="text-gray-600 text-center">
                  Instant AI-guided first aid instructions and emergency response coordination
                </p>
              </div>
            </div>

            {/* Health Camps */}
            <div className="group hover:transform hover:scale-105 transition-all duration-300 md:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Calendar className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Health Camp Updates</h3>
                <p className="text-gray-600 text-center">
                  Stay informed about upcoming health camps and special medical events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=2000"
            alt="Emergency Response"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">24/7 Emergency Assistance</h2>
            <p className="text-xl mb-12 leading-relaxed">
              Our AI-powered emergency response system provides instant medical guidance while connecting you with nearby hospitals. Get step-by-step first aid instructions, vital sign monitoring tips, and real-time coordination with emergency services.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <AlertCircle className="h-10 w-10 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Instant AI Guidance</h3>
                <p className="text-sm">Smart first aid instructions tailored to your emergency</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Hospital className="h-10 w-10 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Hospital Network</h3>
                <p className="text-sm">Quick connection to nearest available hospitals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <Ambulance className="h-10 w-10 text-white mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Emergency Response</h3>
                <p className="text-sm">Coordinated ambulance dispatch and preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Benefits for Everyone
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800"
                    alt="Patient Benefits"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-6 left-6 bg-blue-600 p-4 rounded-lg shadow-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">For Patients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Reduced waiting time with smart queue management</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Enhanced safety with minimal exposure to waiting areas</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>24/7 AI-powered emergency assistance</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Priority access to health camps and special events</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                    alt="Hospital Benefits"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-6 left-6 bg-green-600 p-4 rounded-lg shadow-lg">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">For Hospitals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Enhanced patient satisfaction and loyalty</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Optimized resource management and scheduling</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Improved infection control and safety measures</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Digital transformation and competitive advantage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Camps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Health Camps</h2>
            <button className="group flex items-center text-blue-600 hover:text-blue-700">
              View All Camps
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
                title: "Comprehensive Health Screening",
                description: "Complete health assessment and consultations",
                date: "March 15, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
                title: "Dental Care Camp",
                description: "Professional dental checkup and cleaning",
                date: "March 20, 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
                title: "Vision Care Camp",
                description: "Complete eye examination and consultation",
                date: "March 25, 2024"
              }
            ].map((camp, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative">
                    <img 
                      src={camp.image}
                      alt={camp.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{camp.title}</h3>
                    <p className="text-gray-600 mb-4">{camp.description}</p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{camp.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
                <Hospital className="h-8 w-8 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors">MediQueue</span>
              </div>
              <p className="text-gray-400">
                Transforming healthcare experiences through intelligent queue management and emergency assistance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Features', 'Benefits', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-2 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="group flex items-center hover:text-blue-400 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5 mr-2 text-blue-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">+1 234 567 890</span>
                </li>
                <li className="group flex items-center hover:text-blue-400 transition-colors cursor-pointer">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">support@mediqueue.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[Users, Heart].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediQueue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;