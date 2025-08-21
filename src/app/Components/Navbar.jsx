"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const {data:session, status} = useSession();
  console.log(session,status);
  const links = (
    <>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href={`products`}>Products</Link>
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
        <a className="btn btn-ghost text-xl">LakshmiCommerce</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        
        {status === "authenticated"?(
          <button onClick={()=>signOut()} className="btn btn-outline ">LogOut</button>
        ):(
          <>
          <Link href={`/login`} className="btn">Login</Link>
        <Link href={`/register`} className="btn">Register</Link>
          </>
      )}
        
      </div>
    </div>
  );
};

export default Navbar;
