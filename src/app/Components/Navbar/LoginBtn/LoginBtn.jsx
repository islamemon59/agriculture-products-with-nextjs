import Link from "next/link";
import React from "react";

const LoginBtn = ({ setIsMenuOpen }) => {
  return (
    <Link
      href="/login"
      onClick={() => setIsMenuOpen(false)}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
    >
      Login
    </Link>
  );
};

export default LoginBtn;
