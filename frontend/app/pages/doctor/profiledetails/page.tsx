import React from 'react'
import Button from '@/components/doctor/button'
import ProfilePhotoFrame from '@/components/doctor/photoframe';

const page = () => {
  return (
    <div className="border-4 rounded-xl px-5 py-5 mt-10 mb-10 flex-none">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="full-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                MCI Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="MCI"
                  autoComplete="MCI-Num"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1"></div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Working Hospial
              </label>
              <div className="mt-2">
                <input
                  name="Hospital"
                  type="text"
                  autoComplete="Hospital"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Living District
              </label>
              <div className="mt-2">
                <select
                  name="District"
                  autoComplete="District-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Colombo</option>
                  <option>Gampaha</option>
                  <option>kalutara</option>
                  <option>Matara</option>
                  <option>Galle</option>
                  <option>Hambanthota</option>
                  <option>Kandy</option>
                  <option>Nuwaraeliya</option>
                  <option>Matale</option>
                  <option>Ratnapura</option>
                  <option>Badulla</option>
                  <option>Kegalle</option>
                  <option>Monaragala</option>
                  <option>Kurunegala</option>
                  <option>Puttalam</option>
                  <option>Anuradhapura</option>
                  <option>Polonnaruwa</option>
                  <option>Trincomalee</option>
                  <option>Batticaloa</option>
                  <option>Ampara</option>
                  <option>Vavuniya</option>
                  <option>Kilinochchi</option>
                  <option>Mullaitivu</option>
                  <option>Jaffna</option>
                  <option>Mannar</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1"></div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Qualification
              </label>
              <div className="mt-2">
                <input
                  name="Qualification"
                  type="text"
                  autoComplete="Qualification"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-5">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Specialist in
              </label>
              <div className="mt-2">
                <input
                  name="Specialist"
                  type="text"
                  autoComplete="Specialist"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1"></div>
            <div className="sm:col-span-1 sm:row-span-6"><ProfilePhotoFrame/></div>
            <div className="sm:col-span-1"></div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Biography
              </label>
              <div className="mt-2">
                <textarea
                  rows='7'
                  cols='7'
                  name="Biography"
                  type="text"
                  autoComplete="Biography"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Contact No
              </label>
              <div className="mt-2">
                <input
                  name="ContactNumber"
                  type="text"
                  autoComplete="ContactNumber"
                  className="block w-full rounded-md border-2 border-shadow-green-400 border-green py-1.5 px-2  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2"></div>
            <div className="sm:col-span-3"></div>
            <div className="sm:col-span-1"></div>
            <div className="sm:col-span-2 flex-row inline-flex">
            <Button type="Save Changes" style="w-23 h-10"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="Back" style="w-26 h-10"/>
            </div>
          </div>
          </div>
  )
}

export default page
