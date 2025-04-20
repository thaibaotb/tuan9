import React, { useState } from 'react';
import './App.css';

// Tạo một component Header đơn giản để demo.
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <svg className="w-8 h-8 text-chefify-pink mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <img src="src/assets/chefify.png" alt="" />
      </div>

      {/* Thanh tìm kiếm */}
      <div className="relative rounded-md bg-gray-100">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="bg-gray-100 border-none text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none block w-64 pl-10 pr-3 py-2 sm:text-sm rounded-md"
          placeholder="What would you like to cook?"
        />
      </div>

      {/* Các liên kết điều hướng */}
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">What to cook</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Recipes</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Ingredients</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Occasions</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
      </nav>

      {/* Các nút */}
      <div className="hidden md:flex space-x-2 ml-5">
        <button className="bg-pink-100 hover:bg-pink-600 text-pink-400">Login</button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white">Subscribe</button>
      </div>

      {/* Menu di động (bạn sẽ cần thêm logic cho phần này) */}
      <div className="md:hidden">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Khu vực nội dung chính với Thẻ Công thức trong ngày chồng lên */}
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('src/assets/Healthy-cooking.jpg')" }}>
        {/* Recipe Card */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 bg-white p-8 rounded-xl shadow-lg w-[360px]">
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-sm px-4 py-1 rounded-full shadow-md">
            Recipe of the day
          </div>

          {/* Title */}
          <h2 className="text-pink-600 text-xl font-bold text-center mt-6">Salad Caprese</h2>

          {/* Description */}
          <p className="text-gray-600 text-sm text-center mt-2">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </p>

          {/* Avatar & name */}
          <div className="flex flex-col items-center mt-6">
            <img src="https://i.pravatar.cc/40" alt="avatar" className="w-10 h-10 rounded-full mb-2" />
            <span className="text-sm text-gray-700 font-medium">Salad Caprese</span>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow">
              View now →
            </button>
          </div>
        </div>
      </div>

      {/* Phần "This Summer Recipes" */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">This Summer Recipes</h2>
        <p className="text-center text-gray-600 mb-10">We have all your Independence Day sweets covered.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/italian-tomato-salad-1200x1200-1-500x375.jpg" alt="Italian-style salad" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Italian-style tomato salad</h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">14 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/spaghetti.jpg" alt="Spaghetti" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Spaghetti with vegetables and shrimp</h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">15 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/lotus.jpg" alt="Lotus salad" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Lotus delight salad</h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">20 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/snack.jpg" alt="Snack cake" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Snack cakes</h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">21 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phần "Recipes With Videos" */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">Recipes With Videos</h2>
        <p className="text-center text-gray-600 mb-10">Cooking Up Culinary Creations with Step-by-Step Videos</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/ya-spicy-cabbage-slaw-lvhp-superJumbo.jpg" alt="Italian-style salad" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Salad with cabbage and shrimp</h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">14 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/Shrimp-and-baby-potato-salad-in-a-bowl.jpg" alt="Spaghetti" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Salad of cove beans, shrimp and potatoes </h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">15 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg" alt="Lotus salad" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Sunny-side up fried egg </h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">20 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="src/assets/lotus.jpg" alt="Snack cake" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Lotus delight salad </h3>
                <span className="text-xs text-pink-500 mt-1 inline-block">21 minutes</span>
              </div>
              <button>
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">Editor's pick</h2>
        <p className="text-center text-gray-600 mb-10">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start relative">
            <img src="src/assets/images.jpg" alt="Sticky rice ball" className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Stuffed sticky rice ball</h3>
              <span className="text-sm text-gray-500">34 minutes</span>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://i.pravatar.cc/30?img=1" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-gray-700">Jennifer King</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...
              </p>
            </div>
            <button className="absolute top-4 right-4">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
              </svg>
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start relative">
            <img src="src/assets/20792-b-and-ls-strawberry-smoothie-ddmfs-0321-3x4-hero-f9aad20d876448a49a3561bec1da6363.jpg" alt="Strawberry smoothie" className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Strawberry smoothie</h3>
              <span className="text-sm text-gray-500">40 minutes</span>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://i.pravatar.cc/30?img=2" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-gray-700">Matthew Martinez</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...
              </p>
            </div>
            <button className="absolute top-4 right-4">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
              </svg>
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start relative">
            <img src="src/assets/latte-art-ruze.jpg" alt="Latte Art" className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Latte Art</h3>
              <span className="text-sm text-gray-500">19 minutes</span>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://i.pravatar.cc/30?img=3" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-gray-700">Sarah Hill</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Latte art is the skillful craft of creating captivating designs on the surface of a latte...
              </p>
            </div>
            <button className="absolute top-4 right-4">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
              </svg>
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start relative">
            <img src="src/assets/images (1).jpg" alt="Butter fried noodles" className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Butter fried noodles</h3>
              <span className="text-sm text-gray-500">16 minutes</span>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://i.pravatar.cc/30?img=4" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-gray-700">Julia Lopez</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...
              </p>
            </div>
            <button className="absolute top-4 right-4">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h2 className="font-bold text-lg mb-2 text-left">About Us</h2>
            <p className="text-sm mb-4 text-left">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded w-full bg-gray-100 border-none text-gray-700 placeholder-gray-40 mr-2"
              />
              <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white">Send</button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h2 className="font-bold text-lg mb-2">Learn More</h2>
            <ul className="space-y-2 text-sm">
              <li><a className='text-gray-300' href="#">Our Cooks</a></li>
              <li><a className='text-gray-300' href="#">See Our Features</a></li>
              <li><a className='text-gray-300' href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-bold text-lg mb-2">Shop</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Gift Subscription</a></li>
              <li><a href="#">Send Us Feedback</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h2 className="font-bold text-lg mb-2">Recipes</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#">What to Cook This Week</a></li>
              <li><a href="#">Pasta</a></li>
              <li><a href="#">Dinner</a></li>
              <li><a href="#">Healthy</a></li>
              <li><a href="#">Vegetarian</a></li>
              <li><a href="#">Vegan</a></li>
              <li><a href="#">Christmas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <img src="src/assets/chefifywhite.png" alt="Chefify Logo" className="h-8" />
          </div>
          <p className="text-sm">&copy; 2023 Chefify Company</p>
          <div className="text-sm space-x-2">
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
