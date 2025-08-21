"use client";
import React from "react";
import AuthLottie from "@/app/Components/AuthLottie";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      Swal.fire({
        title: "Logging in...",
        text: "Please wait while we sign you in",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (response?.ok) {
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: "Login successful",
          confirmButtonText: "Continue",
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response?.error || "Invalid email or password",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "An unexpected error occurred",
        confirmButtonText: "Try Again",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      Swal.fire({
        title: "Connecting to Google...",
        text: "Please wait while we redirect you",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      
      // Sign in with Google
      await signIn("google", {
        callbackUrl: "/",
        redirect: false,
      });
      
      Swal.close();
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: "Unable to connect with Google. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full">
          <AuthLottie />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handlesubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
            
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full gap-2"
              type="button"
            >
             <FcGoogle size={18} />
              Continue with Google
            </button>

            <span className="text-center mt-4">
              Don't have an account?{" "}
              <Link className="text-blue-500 hover:underline" href="/register">
                Register Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;