// app/login/page.tsx
import React from 'react';
import Image from 'next/image';
import background from "../../public/images/login/picture.png";

const Page: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Image src={background} alt="Background Image" className="w-full h-full object-cover" width={1920} height={1080} />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center">
            <h2 className="text-xl font-bold text-left">Welcome!</h2>
          </div>
          <form>
            <div className="mt-6 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              ><a href="./login/StudentLogin">
                Student</a>
              </button>
            </div>
            <div className="mt-6 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              ><a href="./login/DocterLogin">
                Doctor</a>
              </button>
            </div>
            <div className="mt-6 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              ><a href="./login/AdminLogin">
                Admin</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;