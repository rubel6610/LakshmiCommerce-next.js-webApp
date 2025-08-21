/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
    domains:['lh3.googleusercontent.com',"images.pexels.com"],
    remotePatterns:[{
        protocol:"https",
        hostname:"lh3.googleusercontent.com",
        port:"",
        pathname:"/**"
    }]
   }
   
};

export default nextConfig;
