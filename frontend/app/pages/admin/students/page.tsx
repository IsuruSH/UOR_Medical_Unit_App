import {Metadata} from 'next';
import React from 'react'


const page = () => {
    return (
        <div className="pl-6 pr-6">
            <div className="text-dark-green  mt-2">
                <h1 className="font-extrabold">Student&apos;s Details</h1>
            </div>
            <div className={"flex flex-row"}>
                <div className="text-dark-green basis-1/4 font-medium mt-5">
                    <h2>Enter Admission Number</h2>
                </div>
                <div className={"basis-1/4 mt-3"}>
                    <div className="flex items-center h-8 bg-white border border-gray-300 rounded-xl shadow-sm p-2">
                        <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-4.35-4.35m1.8-4.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="Enter Admission Number"
                            className="ml-3 bg-transparent outline-none text-gray-700"
                        />
                    </div>
                </div>

            </div>
            <form>
                <div className={"rounded-lg mt-5 p-8 bg-white shadow-xl "}>
                    <div className={"flex flex-row"}>
                        <div className={"basis-1/3 "}>
                            <div className={"rounded-lg mt-10 mx-10 pb-2 bg-blue-100 shadow-2xl "}>
                                <div className="text-dark-green font-semibold pt-10">
                                    <h2 className={"text-center "}>Kushan Sandul</h2>
                                </div>
                                <div className="text-[#85A5C2] text-xs font-light">
                                    <p className={"text-center "}>24 years old | SC/2021/12428 </p>
                                </div>
                                <div className={"flex flex-row mt-10 text-[#85A5C2]"}>
                                    <div className={"basis-1/3"}>
                                        <p className={"text-center font-bold text-xs"}>Blood </p>
                                        <p className={"text-center mt-1 font-extrabold"}>O+ </p>
                                    </div>
                                    <div className={"basis-1/3 border-x-[1px] border-gray-400"}>
                                        <p className={"text-center font-bold text-xs"}>Height </p>
                                        <p className={"text-center mt-1 font-extrabold"}>172 cm </p>
                                    </div>
                                    <div className={"basis-1/3"}>
                                        <p className={"text-center font-bold text-xs"}>Weight </p>
                                        <p className={"text-center mt-1 font-extrabold"}>85 kg </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"basis-1/3"}>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Name" className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Name
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Name"
                                        id="Name"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Name"
                                    />

                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Student Number"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Student Number
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Student Number"
                                        id="Student Number"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Student Number"
                                    />

                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Address"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Home Address
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Address"
                                        id="Address"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Home Address"
                                    />

                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Email"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Email Address
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="email"
                                        name="Email"
                                        id="Email"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Email Address"
                                    />

                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Age" className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Age
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Age"
                                        id="Age"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Age"
                                    />
                                </div>
                                <div className={"mr-5 mt-3"}>
                                    <label htmlFor="Faculty"
                                           className="block text-xs text-gray-600 font-semibold leading-6  ">
                                        Faculty
                                    </label>
                                    <div className=" relative  rounded-md shadow-sm">
                                        <select
                                            name="Faculty"
                                            id="Faculty"
                                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        >
                                            <option>Faculty of Science</option>
                                            <option>Faculty of Management and Finance</option>
                                            <option>Faculty of Humanities and Social Science</option>
                                            <option>Faculty of Engineering</option>
                                            <option>Faculty of Medicine</option>
                                            <option>Faculty of Allied Health Science</option>
                                            <option>Faculty of Agriculture</option>
                                            <option>Faculty of Technology</option>
                                            <option>Faculty of Fisheries and Marine Science & Technology</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={"mr-5 mt-3 "}>
                                    <label htmlFor="Faculty"
                                           className="block text-xs text-gray-600 font-semibold leading-6  ">
                                        Coming From
                                    </label>
                                    <div className={"flex flex-row"}>
                                        <div className={"flex-initial pl-2"}>
                                            <input type="radio" name="Coming From" id="Hostal" value="Hostal"/>
                                            <label
                                                className={"pl-3 text-gray-900 pl-2 placeholder:text-gray-400 focus:ring-0  sm:text-sm sm:leading-6 basis-1/3"}
                                                htmlFor="Hostal">Hostal</label>
                                        </div>
                                        <div className={"pl-5 flex-initial"}>
                                            <input type="radio" name="Coming From" id="Private Place"
                                                   value="Private Place"/>
                                            <label
                                                className={"pl-3 text-gray-900 pl-2  placeholder:text-gray-400 focus:ring-0  sm:text-sm sm:leading-6 basis-1/3"}
                                                htmlFor="Private Place">Private Place</label>
                                        </div>
                                        <div className={"pl-5 flex-initial"}>
                                            <input type="radio" name="Coming From" id="Home" value="Home"/>
                                            <label
                                                className={"pl-3 text-gray-900 pl-2  placeholder:text-gray-400 focus:ring-0  sm:text-sm sm:leading-6 basis-1/3"}
                                                htmlFor="Home">Home</label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className={"basis-1/3"}>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Mobile Number"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Mobile Number
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Mobile Number"
                                        id="Mobile Number"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Mobile Number"
                                    />
                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Height"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Height
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Height"
                                        id="Height"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Height"
                                    />
                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Weight"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Weight
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Weight"
                                        id="Weight"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Weight"
                                    />
                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Blood Group"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Blood Group
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Blood Group"
                                        id="Blood Group"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Blood Group"
                                    />
                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Alaric"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Alaric Medicines or Any thing
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                            <textarea
                                name="Alaric"
                                id="Alaric"
                                rows={6}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                placeholder="Enter Your Details"
                            />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"flex flex-row"}>
                        <div className={"basis-1/3"}></div>
                        <div className={"basis-1/3"}>
                            <hr className={"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-2"}/>
                            <div className={"mr-5 mt-3"}>
                                <h1 className="block text-s text-gray-900 font-semibold leading-6">
                                    Parent/Guardian Details
                                </h1>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor="Guardian"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Parent/Guardian Name
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Guardian"
                                        id="Guardian"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Parent/Guardian Nam"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"basis-1/3"}>
                            <hr className={"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-5"}/>
                            <div className={"mr-5 mt-[4.2rem]"}>
                                <label htmlFor="Mobile Number"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Mobile Number
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Mobile Number"
                                        id="Mobile Number"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Mobile Number"
                                    />
                                </div>
                            </div>
                            <div className={"mt-5 flex flex-row-reverse"}>
                                <div className={"basis-1/4 "}>
                                    <input type="submit" value="Save" className={`inline-flex items-center w-24 h-10 justify-center rounded-full bg-dark-green px-6 font-medium text-neutral-50 shadow-lg shadow-dark-green transition active:scale-95`}/>
                                </div>
                                <div className={"basis-1/4"}>
                                    <input type="reset" value="Reset" className={`inline-flex items-center w-24 h-10 justify-center rounded-full bg-dark-green px-6 font-medium text-neutral-50 shadow-lg shadow-dark-green transition active:scale-95`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default page;










