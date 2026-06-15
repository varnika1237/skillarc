import React from 'react';
import { useNavigate } from 'react-router-dom';

const myCourses = [
  { id: 1, title: 'Full Stack Web Development', students: 1200, revenue: 59880, rating: 4.8, emoji: '💻' },
  { id: 2, title: 'React JS Complete Guide', students: 980, revenue: 44020, rating: 4.7, emoji: '⚛️' },
  { id: 3, title: 'Node JS Masterclass', students: 750, revenue: 33750, rating: 4.6, emoji: '🟢' },
];

function InstructorDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Instructor' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">
        <h1
          onClick={() => navigate('/')}
          className="text-2xl font-bold text-blue-400 cursor-pointer">
          Skillarc
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-400">👋 Hello, {user.name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-10 py-10">
        {/* Welcome */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome, <span className="text-blue-400">{user.name}!</span> 🎓</h2>
          <p className="text-gray-400">Manage your courses and track your earnings!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-400">3</h3>
            <p className="text-gray-400 mt-2">Total Courses</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-green-400">2,930</h3>
            <p className="text-gray-400 mt-2">Total Students</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400">₹1.37L</h3>
            <p className="text-gray-400 mt-2">Total Revenue</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-purple-400">4.7⭐</h3>
            <p className="text-gray-400 mt-2">Avg Rating</p>
          </div>
        </div>

        {/* My Courses */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">My Courses 📚</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
            + Add New Course
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-gray-800 rounded-xl p-6">
              <div className="text-5xl mb-4 text-center">{course.emoji}</div>
              <h4 className="text-lg font-bold mb-4">{course.title}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Students</span>
                  <span className="text-blue-400 font-semibold">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-green-400 font-semibold">₹{course.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating</span>
                  <span className="text-yellow-400 font-semibold">⭐ {course.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold">
                  Edit
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-semibold">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400 mt-10">
        <p>© 2024 Skillarc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default InstructorDashboard;