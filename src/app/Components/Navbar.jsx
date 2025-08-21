"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = (
    <>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/products'>Products</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">LakshmiCommerce</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* Dark/Light Mode Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input 
            type="checkbox" 
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <FaSun className="swap-on h-5 w-5" />
          <FaMoon className="swap-off h-5 w-5" />
        </label>

        {status === "authenticated" ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image 
                  src={session.user?.image || "/default-avatar.png"} 
                  alt="Profile picture" 
                  height={40} 
                  width={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
            
              <li>
                <button onClick={() => signOut()} className="text-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href={`/login`} className="btn btn-primary">Login</Link>
            <Link href={`/register`} className="btn btn-outline">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;