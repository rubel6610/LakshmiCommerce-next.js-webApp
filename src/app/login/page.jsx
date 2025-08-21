"use client"
import React from 'react';


import { loginUser } from '../actions/auth/loginUser';
import AuthLottie from '@/app/Components/AuthLottie';
import Link from 'next/link';


const Login = () => {
    const handlesubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
      await loginUser({email,password})
    }
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='w-full'>
       <AuthLottie/>
        </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handlesubmit} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <span className=''>Don't have an account <Link className='text-blue-500' href={`/register`}>Register Now</Link></span>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;