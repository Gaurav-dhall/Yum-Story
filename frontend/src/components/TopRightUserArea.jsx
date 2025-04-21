import { useEffect, useState } from 'react';
import axios from 'axios'; // if you're using axios instance
import { useNavigate } from 'react-router-dom';

export default function TopRightUserArea() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  
    useEffect(() => {
      axios.get('http://localhost:3000/users/profile', { withCredentials: true })
     
        .then((res) => {
          setUser(res.data); // You can store name/email too
        })
        .catch(() => {
          setUser(null); // not logged in
        });
        
    }, []);

    return (
    <div>
      {user ? (
      // ✅ If logged in, show profile icon
      <div className="relative inline-block">
        {/* 👤 Profile icon */}
        <div
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
        >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
        </svg>
        </div>

        {/* ✅ Dropdown visible on click */}
        {dropdownOpen && (
        <div className={`absolute ${window.innerWidth < 640 ? 'left-0' : 'right-0'} w-32 bg-white shadow-lg rounded-md z-50`}>
          <p className="px-4 py-2 text-xs text-gray-700">Hello, {user.name} 👋🏻</p>
          <button
          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => navigate('/profile')}
          >
          Profile
          </button>
          <button
          className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
          onClick={async () => {
            await axios.get('http://localhost:3000/users/logout', { withCredentials: true });
            alert('Logout successful');
            setUser(null);
            navigate('/login');
          }}
          >
          Logout
          </button>
        </div>
        )}
      </div>
      ) : (
      // ❌ If not logged in
      <div className="space-x-2">
        <button
        onClick={() => navigate('/login')}
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
        >
        Log in
        </button>
        <button
        onClick={() => navigate('/signup')}
        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
        >
        Sign up
        </button>
      </div>
      )}
    </div>
    );
}

