import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupImg from '../assets/signupImg.png'


export default function PerfectRecipeSignup() {

  const [email, setEmail] = useState('');
  const [name,setName]=useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword,setConfirmPassword]=useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/users/register', {
        name,
        email,
        password
      });

      alert(res.data.message); // "Registration successful"
      navigate('/login'); // 👈 Redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header/Navigation */}
      <Nav />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Food Image */}
          <div className="w-full md:w-1/2">
            <img
              src={signupImg}
              alt="Healthy food bowl with vegetables and grains"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Login-up Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-2xl font-bold mb-6">Want to join our Family</h2>
            <form onSubmit={handleSubmit}>
  {/* Name Field */}
  <div className="mb-4">
    <label className="sr-only">Name</label>
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-400"
        placeholder="Full Name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
  </div>

  {/* Email Field */}
  <div className="mb-4">
    <label className="sr-only">Email</label>
    <div className="relative">
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-400"
        placeholder="Email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {email && (
        <span className="absolute right-3 top-2.5 text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </div>
  </div>

  {/* Password Field */}
  <div className="mb-4">
    <label className="sr-only">Password</label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="button"
        className="absolute right-3 top-2.5 text-gray-400"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
          </svg>
        )}
      </button>
    </div>
  </div>

 { /* Confirm Password Field */}
    <div className="mb-4">
      <label className="sr-only">Confirm Password</label>
      <div className="relative">
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
      
    >
      Sign Up
    </button>
  </form>



              <div className="mt-6 text-center text-sm">
            Already registered? <a href="/login" className="text-red-500 hover:underline">Log in</a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
      <Footer />
    </div>
  );
}
