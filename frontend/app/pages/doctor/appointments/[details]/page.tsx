"use client";
import React from "react";
import {FC} from "react";
import patientDetails from "../../../../../data/doctor/patientDetails.json";

interface pageProps {
    params: {
        details: string;
    }
}

const Page: FC<pageProps> = ({params}) => {

    for (const item of patientDetails) {
        if (params.details == item.id) {
            return (
                <div className="w-full h-auto">
                    <div>
                        <button className="bg-gray text-[#386641] px-10 rounded-sm">Back</button>
                    </div>
                    <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5">
                        <div
                            className="min-w-[350px] flex flex-col items-center justify-start py-10 bg-[#F7FBFF] shadow-md rounded-md">
                            <div className="w-[140px] h-[140px] bg-[#D9D9D9] shadow-md rounded-sm bg-no-repeat bg-cover bg-center"
                                 style={{backgroundImage: `url(${item.avatar})`}}
                            >
                                {/*<img
                                    src={item.avatar}
                                    alt="student.png"
                                    className="size-full shadow-md rounded-sm"
                                />*/}
                            </div>
                            <div className="w-full h-auto mt-5">
                                <table className="w-full text-center">
                                    <tbody>
                                    <tr>
                                        <td>Blood</td>
                                        <td>Height</td>
                                        <td>Weight</td>
                                    </tr>
                                    <tr>
                                        <td>{item.blood}</td>
                                        <td>{item.height}</td>
                                        <td>{item.weight}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="w-auto h-auto min-w-[350px] rounded-lg p-5 border-4 border-gray shadow-md">
                            <h5 className="font-bold underline">Student Details</h5>
                            <table className="w-full table-auto table my-5">
                                <tbody>
                                <tr>
                                    <td>Name :</td>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <td>Address :</td>
                                    <td>{item.address}</td>
                                </tr>
                                <tr>
                                    <td>Age :</td>
                                    <td>{item.age}</td>
                                </tr>
                                <tr>
                                    <td>Faculty :</td>
                                    <td>{item.faculty}</td>
                                </tr>
                                <tr>
                                    <td>Department :</td>
                                    <td>{item.department}</td>
                                </tr>
                                <tr>
                                    <td>Contact No :</td>
                                    <td>{item.contact}</td>
                                </tr>
                                <tr>
                                    <td>Coming From :</td>
                                    <td>{item.from}</td>
                                </tr>
                                </tbody>
                            </table>
                            <h5 className="font-bold underline">Parent/Guardian Details</h5>
                            <table className="w-full table-auto table mt-5">
                                <tbody>
                                <tr>
                                    <td>Name :</td>
                                    <td>{item.parentName}</td>
                                </tr>
                                <tr>
                                    <td>Address :</td>
                                    <td>{item.parentAddress}</td>
                                </tr>
                                <tr>
                                    <td>Contact No :</td>
                                    <td>{item.parentContact}</td>
                                </tr>
                                <tr>
                                    <td>Relationship to student :</td>
                                    <td>{item.relation}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div>
            <p>No such type of patient</p>
        </div>
    )


}

export default Page;