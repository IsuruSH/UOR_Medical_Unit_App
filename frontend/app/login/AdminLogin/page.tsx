"use client";
import React, { useState } from 'react';
// import BackButton from '../Button';


const page: React.FC = () => {
  const [userInput, setUserInput] = useState({ name: '', password: '' });

  const getUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const getUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, password } = userInput;
    if (name && password) {
      console.log({ name, password });
      // Handle login logic here
    } else {
      console.log('Please fill in all fields.');
    }
  };
  return (
    <div className="min-h-screen bg-login-baground flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center">
          <h2 className="text-xl font-bold text-left">Welcome!</h2>
          <h1 className="text-2xl font-bold mb-4 text-left">Admin Sign In</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User name
            </label>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={userInput.name}
                onChange={getUserName}
                placeholder="Enter your user name"
                aria-label="Username"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={userInput.password}
                onChange={getUserPassword}
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-gray-700 text-sm">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Remember me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forgot-password" // Link to Forgot Password page
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-6 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              aria-label="Login"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="inline-block align-baseline font-bold text-sm text-gray-700">
              Don't have an account?{' '}
            </p>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register" // Link to Register page
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
