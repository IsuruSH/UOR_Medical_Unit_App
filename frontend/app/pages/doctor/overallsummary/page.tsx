"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import patientDetails from "../../../../data/doctor/patientDetails.json";
import "../../../globals.css";

const Page: React.FC = () => {

    const [search, setSearch] = useState("");

    return (
            <div className="overflow-auto h-300 xl:h-500 2xl:h-800 shadow-md rounded-md">
                <table className="table-inner w-full text-xs lg:text-base 2xl:text-xl table-outer">
                    <thead className='bg-white-3 sticky top-0 shadow-md'>
                    <tr>
                        <th className='p-3 text-center'>APPOINTMENT NO</th>
                        <th className='p-3 text-center'>Name</th>
                        <th className='p-3 text-center'>Student-ID</th>
                        <th className='p-3 text-center'>Notes</th>
                        <th className='p-3 text-center'>Consult Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patientDetails.map((patient, index) => (
                            <tr key={index}>
                                <td className='p-3 text-center'>
                                    <a href="" className="hover:text-light-green">{index + 1}</a>
                                </td>
                                <td className='p-3 text-center'>{patient.name}</td>
                                <td className='p-3 text-center'>{patient.id}</td>
                                <td className='p-3 text-center'>
                                    <Link href={`/pages/doctor/overallsummary/${patient.id}`}
                                        className="text-light-green bg-white-2 px-5 rounded-xl"
                                    >
                                        Add
                                    </Link>
                                </td>
                                <td className='p-3 text-center'>
                                <button className="text-purple bg-white-2 px-5 rounded-xl">Processing</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
    )
}

export default Page
