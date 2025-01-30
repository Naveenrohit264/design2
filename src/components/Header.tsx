import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img src="/iscap-logo.png" alt="ISCAP Logo" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavDropdown 
              text="Courses" 
              items={[
                "Data Science & AI",
                "Web Development",
                "Digital Marketing",
                "Mobile Development",
                "Cloud Computing"
              ]} 
            />
            <NavDropdown 
              text="Resources" 
              items={[
                "Study Materials",
                "Practice Tests",
                "Live Projects",
                "Interview Prep",
                "Career Guide"
              ]} 
            />
            <NavLink href="#" text="Success Stories" />
            <NavLink href="#" text="Enterprise" />
            <div className="flex items-center space-x-4">
              <button className="text-[#4B9CD3] font-semibold hover:text-[#3d7ea8] transition">
                Log In
              </button>
              <button className="bg-[#F7B928] text-white px-6 py-2 rounded-full hover:bg-[#e5aa24] transition transform hover:scale-105">
                Join For Free
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="#" text="Courses" />
              <MobileNavLink href="#" text="Resources" />
              <MobileNavLink href="#" text="Success Stories" />
              <MobileNavLink href="#" text="Enterprise" />
              <div className="pt-4 space-y-4">
                <button className="w-full text-[#4B9CD3] font-semibold py-2">
                  Log In
                </button>
                <button className="w-full bg-[#F7B928] text-white px-6 py-2 rounded-full hover:bg-[#e5aa24] transition">
                  Join For Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavDropdown({ text, items }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative group">
      <button 
        className="flex items-center text-gray-700 hover:text-[#4B9CD3] transition font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {text}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4B9CD3] transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ href, text }) {
  return (
    <a 
      href={href}
      className="text-gray-700 hover:text-[#4B9CD3] transition font-medium"
    >
      {text}
    </a>
  );
}

function MobileNavLink({ href, text }) {
  return (
    <a 
      href={href}
      className="text-gray-700 hover:text-[#4B9CD3] transition font-medium block"
    >
      {text}
    </a>
  );
}

export default Header;