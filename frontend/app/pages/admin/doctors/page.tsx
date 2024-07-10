import React from 'react'

const page = () => {
    return (
        <div className="pl-6 pr-6">
            <div className="text-dark-green  mt-2">
                <h1 className="font-extrabold">Doctor&apos;s Details</h1>
            </div>
            <div className={"flex flex-row"}>
                <div className="text-dark-green basis-1/4 font-medium mt-5">
                    <h2>Enter Doctor Name</h2>
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
                            placeholder="Enter Doctor Name"
                            className="ml-3 bg-transparent outline-none text-gray-700"
                        />
                    </div>
                </div>

            </div>
            <form>
                <div className={"rounded-lg mt-5 p-8 bg-white shadow-xl "}>
                    <div className={"flex flex-row"}>
                        <div className={"basis-1/3 "}>
                            <div className={"rounded-lg mt-10 mx-10 pb-10 bg-blue-100 shadow-2xl "}>
                                <div className="text-dark-green font-semibold pt-10">
                                    <h2 className={"text-center "}>Dr.Kushan Sandul</h2>
                                </div>
                                <div className="text-[#85A5C2] text-xs font-light">
                                    <p className={"text-center "}>0777357473 </p>
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
                                <label htmlFor="MCI Number"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    MCI Number
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="MCI Number"
                                        id="MCI Number"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter MCI Number"
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
                                <label htmlFor="Hospital"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Working Hospital
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Hospital"
                                        id="Hospital"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Working Hospital"
                                    />
                                </div>
                                {/*<div className={"mr-5 mt-3"}>*/}
                                {/*    <label htmlFor="Faculty"*/}
                                {/*           className="block text-xs text-gray-600 font-semibold leading-6  ">*/}
                                {/*        Faculty*/}
                                {/*    </label>*/}
                                {/*    <div className=" relative  rounded-md shadow-sm">*/}
                                {/*        <select*/}
                                {/*            name="Faculty"*/}
                                {/*            id="Faculty"*/}
                                {/*            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"*/}
                                {/*        >*/}
                                {/*            <option>Faculty of Science</option>*/}
                                {/*            <option>Faculty of Management and Finance</option>*/}
                                {/*            <option>Faculty of Humanities and Social Science</option>*/}
                                {/*            <option>Faculty of Engineering</option>*/}
                                {/*            <option>Faculty of Medicine</option>*/}
                                {/*            <option>Faculty of Allied Health Science</option>*/}
                                {/*            <option>Faculty of Agriculture</option>*/}
                                {/*            <option>Faculty of Technology</option>*/}
                                {/*            <option>Faculty of Fisheries and Marine Science & Technology</option>*/}
                                {/*        </select>*/}
                                {/*    </div>*/}
                                {/*</div>*/}


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
                                <label htmlFor="Specialize In"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Specialize In
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="Specialize In"
                                        id="Specialize In"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                        placeholder="Enter Specialize"
                                    />
                                </div>
                            </div>
                            <div className={"mr-5 mt-3"}>
                                <label htmlFor=" Biography"
                                       className="block text-xs text-gray-600 font-semibold leading-6  ">
                                    Biography
                                </label>
                                <div className=" relative  rounded-md shadow-sm">
                            <textarea
                                name=" Biography"
                                id=" Biography"
                                rows={4}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                placeholder="Enter Your Details"
                            />
                                </div>
                            </div>
                            <div className={"mt-5 flex flex-row-reverse"}>
                                <div className={"basis-1/4 "}>
                                    <input type="submit" value="Save"
                                           className={`inline-flex items-center w-24 h-10 justify-center rounded-full bg-dark-green px-6 font-medium text-neutral-50 shadow-lg shadow-dark-green transition active:scale-95`}/>
                                </div>
                                <div className={"basis-1/4"}>
                                    <input type="reset" value="Reset"
                                           className={`inline-flex items-center w-24 h-10 justify-center rounded-full bg-dark-green px-6 font-medium text-neutral-50 shadow-lg shadow-dark-green transition active:scale-95`}/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </form>

        </div>
    )
}

export default page
