import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <svg className="w-8 h-8 text-chefify-pink mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="font-bold text-xl text-gray-800">Chefify</span>
      </div>

      {/* Search Bar */}
      <div className="relative rounded-md bg-chefify-light-gray">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="bg-chefify-light-gray border-none text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none block w-full pl-10 pr-3 py-2 sm:text-sm rounded-md"
          placeholder="What would you like to cook?"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">What to cook</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Recipes</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Ingredients</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Occasions</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex space-x-2 ml-5">
        <button className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-md">Login</button>
        <button className="bg-chefify-pink text-white px-6 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1">Subscribe</button>
      </div>

      {/* Mobile Menu (you'd typically add more logic for this) */}
      <div className="md:hidden">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;