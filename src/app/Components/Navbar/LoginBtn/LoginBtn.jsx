import Link from "next/link";
import React from "react";

const LoginBtn = ({ setIsMenuOpen }) => {
  return (
    <Link
      href="/login"
      onClick={() => setIsMenuOpen(false)}
      className="text-center dark:text-white text-black text-sm font-bold"
    >
      Login
    </Link>
  );
};

export default LoginBtn;
