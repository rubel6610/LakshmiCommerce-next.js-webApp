"use client"
import AuthLottie from '@/app/Components/AuthLottie';
import Link from 'next/link';
import { registerUser } from '../actions/auth/registerUser';
import Swal from 'sweetalert2';

const Register = () => {
    const handlesubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show loading alert
        Swal.fire({
            title: 'Registering...',
            text: 'Please wait while we create your account',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const res = await registerUser(data);
            
            if (res.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.message || 'User registered successfully',
                    confirmButtonText: 'Continue'
                }).then((result) => {
                    if (result.isConfirmed) {
                        form.reset(); // Reset the form
                        // Optionally redirect to login page
                        // window.location.href = '/login';
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: res.message || 'Failed to register user',
                    confirmButtonText: 'Try Again'
                });
            }
        } catch (error) {
            console.error('Registration error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again.',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-full'>
                    <AuthLottie />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handlesubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">PhotoUrl</label>
                            <input type="text" name='photourl' className="input" placeholder="PhotoUrl" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <span>Already have an account <Link className='text-blue-500' href={`/login`}>Login Now</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;