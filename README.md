# 🛍️ LakshmiCommerce - E-Commerce Platform

LakshmiCommerce is a modern, full-stack e-commerce platform specializing in **premium supari (areca nut)** and other traditional products.  
It is built with **Next.js 14**, **MongoDB**, and **NextAuth**, offering a seamless shopping experience with secure authentication, optimized performance, and responsive design.  

---

## ✨ Features
- **Modern Stack:** Next.js 14, React 18, Tailwind CSS, DaisyUI  
- **Authentication:** NextAuth with Google OAuth & Credentials  
- **Database:** MongoDB + Mongoose for data persistence  
- **Responsive Design:** Mobile-first with Tailwind CSS  
- **Dark/Light Mode:** Theme support via DaisyUI  
- **Image Optimization:** Next.js `Image` component with built-in optimization  
- **Server Actions:** Efficient data handling with React Server Components  

---

## 📦 Setup & Installation

### 🔧 Prerequisites
- Node.js **v18+**
- MongoDB Atlas (or local MongoDB instance)  
- Google OAuth credentials (for Google login)  

### 🚀 Steps
1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd lakshmicommerce
2. **Install Dependencies**
    `npm install`

3. **Configure Environment Variables**
    ```MONGODB_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    DB_NAME=your mongodb database name
    NEXT_PUBLIC_IMGBB_KEY=your imgbb-api-key
4. **Run the Development Server**
    `npm run dev`

5. **Route Summary**

| Route   |    Description   |  Access  |   
| -----   |  --------------- | -------- |
| `/`     | Homepage with product showcase | Public   |    
| `/products`     | All products listing         | Public    |  
| `/products/[id]` | Product details page        | Public    |  
| `/dashboard/add-products` | add product        | protected  |   
| `/login`    | Login with Google or credentials | Public     | 
| `/register` | Register with Google or credentials    | Public      |

