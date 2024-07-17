"use client";
import React, {FC} from "react";
import Link from 'next/link';
import patientDetails from "../../../../../data/doctor/patientDetails.json";

interface pageProps {
    params: {
        addNotes: string;
    }
}

const Page: FC<pageProps> = ({params}) => {

    for (const item of patientDetails) {
        if (params.addNotes == item.id) {
            return (
                <div className="w-full p-5">
                    <div className="w-full mb-5">
                        <Link href={'/pages/doctor/overallsummary'}
                              className="bg-gray font-bold text-[#386641] px-8 rounded-sm text-lg"
                        >
                            Back
                        </Link>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full md:w-1/2">
                            <form className="w-full grid grid-cols-1 gap-5">
                                <div className="w-full grid grid-cols-2">
                                    <label>Appointment ID :</label>
                                    <div className="w-full border-2 border-gray rounded-md bg-transparent p-1">
                                        0001
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-2">
                                    <label>Name :</label>
                                    <div className="w-full border-2 border-gray rounded-md bg-transparent p-1">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-2">
                                    <label>Sc Number :</label>
                                    <div className="w-full border-2 border-gray rounded-md bg-transparent p-1">
                                        {item.id}
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-2">
                                    <label>Notes :</label>
                                    <textarea name="note" id="" placeholder="Enter notes"
                                              className="w-full h-32 border-2 border-gray rounded-md focus:outline-none bg-transparent"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full flex justify-center gap-10 mt-5">
                        <button className="bg-[#00B69B] font-bold px-6 rounded-sm">clear</button>
                        <button className="bg-[#979797] font-bold text-[#6226EF] px-6 rounded-sm">submit</button>
                    </div>
                </div>
            );
        }
    }
}

export default Page;