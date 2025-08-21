"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const {data:session, status} = useSession();
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
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Image className="rounded-full h-10 w-10" src={session.user?.image} alt="Profile picture" height={30} width={30}/>
            </div>
            
            <div tabIndex={0}
            className="dropdown-content bg-base-100 rounded-box z-1   p-2 shadow">
              <button onClick={()=>signOut()} className="btn  ">LogOut</button>
            </div>
          </div>
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
