import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Full Stack Web Development', instructor: 'John Smith', price: 499, rating: 4.8, students: 1200, category: 'Development', emoji: '💻' },
  { id: 2, title: 'UI/UX Design Masterclass', instructor: 'Sara Johnson', price: 399, rating: 4.7, students: 980, category: 'Design', emoji: '🎨' },
  { id: 3, title: 'Data Science with Python', instructor: 'Mike Wilson', price: 599, rating: 4.9, students: 1500, category: 'Data Science', emoji: '📊' },
  { id: 4, title: 'Digital Marketing', instructor: 'Emily Davis', price: 299, rating: 4.6, students: 800, category: 'Marketing', emoji: '📈' },
  { id: 5, title: 'React JS Complete Guide', instructor: 'Alex Brown', price: 449, rating: 4.8, students: 1100, category: 'Development', emoji: '⚛️' },
  { id: 6, title: 'Machine Learning A-Z', instructor: 'Chris Lee', price: 649, rating: 4.9, students: 1300, category: 'Data Science', emoji: '🤖' },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">
        <h1
          onClick={() => navigate('/')}
          className="text-2xl font-bold text-blue-400 cursor-pointer">
          Skillarc
        </h1>
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

      {/* Header */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Explore Our <span className="text-blue-400">Courses</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn from the best instructors and take your skills to the next level!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
            {/* Course Thumbnail */}
            <div className="bg-gray-700 h-48 flex items-center justify-center">
              <span className="text-8xl">{course.emoji}</span>
            </div>
            {/* Course Info */}
            <div className="p-6">
              <span className="text-blue-400 text-sm font-semibold">{course.category}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-4">By {course.instructor}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400">⭐ {course.rating}</span>
                <span className="text-gray-400 text-sm">{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-400">₹{course.price}</span>
                <button
                  onClick={() => navigate('/register')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400">
        <p>© 2024 Skillarc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Courses;