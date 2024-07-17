"use client";
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "../../../../components/doctor/datePicker";
import patientDetails from "../../../../data/doctor/patientDetails.json";
import "../../../globals.css";
import {useRouter} from "next/navigation";

const Page: React.FC = () => {

    const [search, setSearch] = useState("");
    const [id,setId]=useState("2");
    const router = useRouter();

    const navigateDetails = (id: String) => {
        router.push(`/pages/doctor/appointments/${id}`);
    }

    return (
        <div className="w-full h-auto p-2">
            <div className="mb-2 h-auto w-full flex justify-between items-center">
                <div className="flex items-center">
                    <div className="ml-2">
                        <button>
                            <FontAwesomeIcon icon={faRotateRight} className="md:h-6 md:w-6 w-5 h-5 text-gray"/>
                        </button>
                    </div>
                    <div className="ml-2">
                        <DatePicker/>
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-gray w-48 md:w-60 rounded-lg p-1 mr-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='md:w-5 md:h-5 w-4 h-4 text-gray'/>
                    <input type="text" placeholder="Search here..."
                           className="text-sm md:text-base w-full focus:outline-none bg-transparent"
                           onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-auto h-300 xl:h-500 2xl:h-800 shadow-md rounded-md">
                <table className="table-inner w-full text-xs lg:text-base 2xl:text-xl table-outer">
                    <thead className='bg-white-3 sticky top-0 shadow-md'>
                    <tr>
                        <th className='p-3 text-center'>APPOINTMENT NO</th>
                        <th className='p-3 text-center'>Stu-ID</th>
                        <th className='p-3 text-center'></th>
                        <th className='p-3 text-center'>TIME</th>
                        <th className='p-3 text-center'>DESCRIPTION</th>
                        <th className='p-3 text-center'>STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patientDetails.filter((patient) => {
                            return search.toLowerCase() === '' ? patient : patient.id.toLowerCase().includes(search);
                        }).map((patient, index) => (
                            <tr key={index}>
                                <td className='p-3 text-center'>
                                    <a href="" className="hover:text-light-green">{index + 1}</a>
                                </td>
                                <td className='p-3 text-center' id="id">{patient.id}</td>
                                <td className='p-3 text-center'>
                                    setId(patient.id)
                                    <button className="text-light-green bg-white-2 px-5 rounded-xl"
                                            onClick={() => navigateDetails(id)}
                                    >
                                        Details
                                    </button>
                                </td>
                                <td className='p-3 text-center'>{patient.time}</td>
                                <td className='p-3 text-center'>
                                    <input type="text" placeholder="........................................"
                                           className='text-center bg-transparent focus:border-none'/>
                                </td>
                                <td className='p-3 text-center'>
                                    <button className="text-light-green bg-white-2 px-5 rounded-xl">Approve</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
