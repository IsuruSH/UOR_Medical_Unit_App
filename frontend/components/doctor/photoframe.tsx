import React from 'react'
import Image from 'next/image'
import UserPhoto from '@/public/images/doctor/user.png'

const ProfilePhotoFrame = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-lg">
      <div className="relative">
          <Image src= {UserPhoto} alt="Profile" height="550" width="500"/>
      </div>
       <a href="#"><h2 className="text-green mr-2 px-5 pt-5">Choose profile photo</h2></a>
    </div>
  );
};

export default ProfilePhotoFrame;