"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SocialLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      toast.loading("Redirecting to Google...", { id: "google-login" });
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Google sign-in failed", { id: "google-login" });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleGoogleLogin}
        className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200"
      >
        <FaGoogle className="text-red-500" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLoginButton;
