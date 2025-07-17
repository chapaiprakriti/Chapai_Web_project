import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const isLandingPage = location.pathname === '/';

  const homePath = user?.role === 'seller' ? '/seller/home' : '/buyer/home';
  const productsPath = user?.role === 'seller' ? '/seller/products' : '/buyer/products';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white w-full shadow-xl border-b border-gray-800 z-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-5 flex justify-between items-center">

        
        <h1>
          <Link
            to={token ? homePath : '/'}
            className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent
                       hover:from-orange-500 hover:to-orange-700 transition duration-300
                       relative inline-block group cursor-pointer"
          >
            ElectroMart
            <span
              className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 rounded-full
                         group-hover:w-full transition-all duration-300 ease-in-out"
            />
          </Link>
        </h1>

        
        <nav className="flex items-center space-x-3 text-base font-semibold">
          <StyledLink to="/about" currentPath={location.pathname} label="About Us" />

          {isLandingPage ? (
            <>
              <StyledLink to="/login" currentPath={location.pathname} label="Login" />
              <StyledLink to="/signup" currentPath={location.pathname} label="Signup" />
            </>
          ) : token ? (
            <>
              <StyledLink to={homePath} currentPath={location.pathname} label="Home" />
              <StyledLink to={productsPath} currentPath={location.pathname} label="Products" />
              {user?.role === 'buyer' && (
                <StyledLink to="/buyer/cart" currentPath={location.pathname} label="Cart" />
              )}

              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700
                           text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg transition-all duration-300
                           hover:shadow-xl transform hover:-translate-y-1 hover:scale-105
                           border border-orange-400/20 hover:border-orange-300/40
                           relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Logout</span>
              </button>
            </>
          ) : (
            <>
              <StyledLink to="/login" currentPath={location.pathname} label="Login" />
              <StyledLink to="/signup" currentPath={location.pathname} label="Signup" />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}


function StyledLink({ to, label, currentPath }) {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`relative group px-4 py-2.5 rounded-xl font-semibold transition-all duration-300
                  transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer
                  ${isActive 
                    ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 border border-orange-500/30' 
                    : 'text-white hover:text-white border border-transparent hover:border-orange-500/30'
                  }
                  hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-orange-600/10
                  hover:shadow-lg hover:shadow-orange-500/20
                  backdrop-blur-sm
                  relative overflow-hidden`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
      <span className="absolute inset-0 rounded-xl border border-orange-500/0 
                       group-hover:border-orange-500/40 transition-all duration-300"></span>
      <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-300">
        {label}
      </span>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                       bg-gradient-to-r from-orange-400 to-orange-600 rounded-full
                       group-hover:w-3/4 transition-all duration-300 ease-out"></span>
    </Link>
  );
}
