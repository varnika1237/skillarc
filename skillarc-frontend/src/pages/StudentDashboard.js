import React from 'react';
import { useNavigate } from 'react-router-dom';

const enrolledCourses = [
  { id: 1, title: 'Full Stack Web Development', instructor: 'John Smith', progress: 65, emoji: '💻' },
  { id: 2, title: 'UI/UX Design Masterclass', instructor: 'Sara Johnson', progress: 30, emoji: '🎨' },
  { id: 3, title: 'Data Science with Python', instructor: 'Mike Wilson', progress: 90, emoji: '📊' },
];

function StudentDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Student' };

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
          <h2 className="text-3xl font-bold mb-2">Welcome back, <span className="text-blue-400">{user.name}!</span> 🎓</h2>
          <p className="text-gray-400">Continue your learning journey today!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-400">3</h3>
            <p className="text-gray-400 mt-2">Enrolled Courses</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-green-400">1</h3>
            <p className="text-gray-400 mt-2">Completed Courses</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400">2</h3>
            <p className="text-gray-400 mt-2">Certificates Earned</p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <h3 className="text-2xl font-bold mb-6">My Courses 📚</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-gray-800 rounded-xl p-6">
              <div className="text-5xl mb-4 text-center">{course.emoji}</div>
              <h4 className="text-lg font-bold mb-1">{course.title}</h4>
              <p className="text-gray-400 text-sm mb-4">By {course.instructor}</p>
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="text-blue-400 font-semibold">{course.progress}%</span>
              </div>
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold">
                Continue Learning
              </button>
            </div>
          ))}
        </div>

        {/* Browse More */}
        <div className="text-center">
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
            Browse More Courses
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400 mt-10">
        <p>© 2024 Skillarc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StudentDashboard;