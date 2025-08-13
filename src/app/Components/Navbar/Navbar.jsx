import Link from "next/link";
import Image from "next/image";
import NavbarCart from "./NavbarCart/NavbarCart";
import MobileMenuButton from "./MobileMenuButton/MobileMenuButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLinks from "./NavLinks/NavLinks";

// Defining the navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://i.ibb.co/4ZrmrCn8/Frame-5.png"
                alt="Logo"
                width={140}
                height={40}
                priority
                className="w-auto h-8 sm:h-10 object-contain"
              />
            </Link>

            {/* Mobile Menu Button */}
            <MobileMenuButton />
          </div>

          {/* Desktop navlinks */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <NavLinks key={link.name} link={link} />
            ))}
          </div>

          {/* Right Side - Cart & User */}
          <NavbarCart />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
