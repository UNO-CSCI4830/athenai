import React from "react";


const Header = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="h-10 w-10 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">AthenAI</span>
            </div>
            {/* Navigation */}
            <nav className="ml-6 flex space-x-8">
              <a href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/groups" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Groups</a>
              <a href="/postings" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Internships</a>
              <a href="/profile" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
              <a href="/dashboard" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">User Dashboard</a>
              <a href="/modules" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Modules</a>
            </nav>
          </div>
        </div>
      </header>
      <div className = "bg-black h-0.5"></div>
    </div>
  );
};

{/* <a href="#" className="text-blue-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-blue-600">Internships</a> */}

export default Header;