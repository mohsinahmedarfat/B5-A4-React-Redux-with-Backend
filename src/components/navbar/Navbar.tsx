import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setIsMobileMenuOpen(false)}
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setIsMobileMenuOpen(false)}
          to="allBooks"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-black"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setIsMobileMenuOpen(false)}
          to="addBook"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-black"
          }
        >
          Add Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setIsMobileMenuOpen(false)}
          to="borrowSummary"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-black"
          }
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white px-5 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            Book<span className="text-green-600">Nest</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 *:hover:text-green-600">
          {navLinks}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 *:hover:text-green-600">
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
