import React from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Brain, 
  Award, 
  Gift, 
  AlignCenterVertical as Certificate, 
  Briefcase,
  Star,
  Bot,
  Users,
  FileCheck,
  Play,
  ChevronRight
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#4B9CD3] to-[#8E44AD] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Learn Without <br />
                <span className="text-[#F7B928]">Limits</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Join millions of students worldwide in their journey to excellence with AI-powered personalized learning
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#F7B928] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e5aa24] transition-all transform hover:scale-105 flex items-center gap-2">
                  Start Free Trial <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-[#23B573] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a8f5a] transition-all transform hover:scale-105 flex items-center gap-2">
                  Watch Demo <Play className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Students learning"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Bot className="w-8 h-8 text-[#4B9CD3]" />
                  <div>
                    <p className="font-semibold text-gray-800">AI-Powered</p>
                    <p className="text-sm text-gray-600">Personalized Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1M+" text="Active Students" color="text-[#4B9CD3]" />
            <StatCard number="10k+" text="Video Lessons" color="text-[#23B573]" />
            <StatCard number="95%" text="Success Rate" color="text-[#F7B928]" />
            <StatCard number="24/7" text="Expert Support" color="text-[#8E44AD]" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B9CD3]">Why Choose ISCAP?</h2>
            <p className="text-xl text-gray-600">Revolutionary features that transform your learning experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bot className="w-12 h-12 text-[#4B9CD3]" />}
              title="AI Resume Builder"
              description="Create professional resumes tailored to your dream job with our AI-powered tool"
              color="bg-[#4B9CD3]/10"
              textColor="text-[#4B9CD3]"
            />
            <FeatureCard 
              icon={<MessageSquare className="w-12 h-12 text-[#23B573]" />}
              title="Expert Mentorship"
              description="Connect with industry experts for personalized guidance and career advice"
              color="bg-[#23B573]/10"
              textColor="text-[#23B573]"
            />
            <FeatureCard 
              icon={<Calendar className="w-12 h-12 text-[#F7B928]" />}
              title="1:1 Live Sessions"
              description="Schedule personal mentoring sessions with top industry professionals"
              color="bg-[#F7B928]/10"
              textColor="text-[#F7B928]"
            />
            <FeatureCard 
              icon={<Brain className="w-12 h-12 text-[#8E44AD]" />}
              title="Skill Assessment"
              description="Track your progress with comprehensive skill evaluation tools"
              color="bg-[#8E44AD]/10"
              textColor="text-[#8E44AD]"
            />
            <FeatureCard 
              icon={<Award className="w-12 h-12 text-[#4B9CD3]" />}
              title="Certifications"
              description="Earn industry-recognized certificates to boost your career"
              color="bg-[#4B9CD3]/10"
              textColor="text-[#4B9CD3]"
            />
            <FeatureCard 
              icon={<Gift className="w-12 h-12 text-[#23B573]" />}
              title="Reward System"
              description="Earn points and unlock exclusive content as you learn"
              color="bg-[#23B573]/10"
              textColor="text-[#23B573]"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B9CD3]">Trending Courses</h2>
            <p className="text-xl text-gray-600">Master the most in-demand skills</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard 
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              title="Data Science & AI"
              rating={4.8}
              students={1234}
              price="₹2999"
              discount="40% OFF"
            />
            <CourseCard 
              image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
              title="Full Stack Development"
              rating={4.9}
              students={2341}
              price="₹3999"
              discount="35% OFF"
            />
            <CourseCard 
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              title="Digital Marketing"
              rating={4.7}
              students={1876}
              price="₹1999"
              discount="50% OFF"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B9CD3]">Success Stories</h2>
            <p className="text-xl text-gray-600">Join thousands of successful students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              name="Sarah Johnson"
              role="Data Scientist at Google"
              text="ISCAP's AI-powered learning platform helped me land my dream job at Google. The personalized curriculum and mentor support made all the difference."
              company="https://www.google.com/favicon.ico"
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              name="Michael Chen"
              role="Senior Developer at Microsoft"
              text="The project-based learning approach and real-world applications helped me master complex programming concepts easily."
              company="https://www.microsoft.com/favicon.ico"
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              name="Emily Davis"
              role="Marketing Lead at Meta"
              text="From a complete beginner to a marketing professional, ISCAP's structured learning path guided me every step of the way."
              company="https://www.meta.com/favicon.ico"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4B9CD3] to-[#8E44AD]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Learning Journey Today</h2>
            <p className="text-xl mb-8">Join over 1 million students already learning with ISCAP</p>
            <button className="bg-[#F7B928] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e5aa24] transition-all transform hover:scale-105">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ number, text, color }) {
  return (
    <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <h3 className={`text-3xl md:text-4xl font-bold ${color} mb-2`}>{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description, color, textColor }) {
  return (
    <div className={`${color} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <div className="mb-6">{icon}</div>
      <h3 className={`text-2xl font-semibold mb-4 ${textColor}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ image, title, rating, students, price, discount }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-[#F7B928] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {discount}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-[#F7B928]" />
            <span className="ml-1 font-semibold">{rating}</span>
            <span className="ml-2 text-gray-600">({students} students)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#4B9CD3] font-bold text-xl">{price}</div>
          <button className="bg-[#23B573] text-white px-4 py-2 rounded-full hover:bg-[#1a8f5a] transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ image, name, role, text, company }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="text-xl font-semibold text-[#4B9CD3]">{name}</h4>
          <div className="flex items-center">
            <p className="text-gray-600">{role}</p>
            <img src={company} alt="Company" className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">{text}</p>
    </div>
  );
}

export default App;