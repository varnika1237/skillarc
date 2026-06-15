import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-400">Skillarc</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="text-white hover:text-blue-400">
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Learn New Skills, <span className="text-blue-400">Unlock Your Future</span>
        </h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl">
          Skillarc is your one-stop platform to learn from expert instructors.
          Browse thousands of courses and start learning today!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Explore Courses
          </button>
          <button
            onClick={() => navigate('/register')}
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Become Instructor
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center gap-16 py-12 bg-gray-800">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-400">500+</h3>
          <p className="text-gray-400 mt-2">Courses</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-400">50+</h3>
          <p className="text-gray-400 mt-2">Instructors</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-400">10k+</h3>
          <p className="text-gray-400 mt-2">Students</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose <span className="text-blue-400">Skillarc?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-400">Learn from industry professionals with years of experience.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Learn Anywhere</h3>
            <p className="text-gray-400">Access your courses anytime, anywhere on any device.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Get Certified</h3>
            <p className="text-gray-400">Earn certificates to showcase your skills to employers.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400">
        <p>© 2024 Skillarc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;