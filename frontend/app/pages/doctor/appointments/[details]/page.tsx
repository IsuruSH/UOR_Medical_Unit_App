import React from "react";

function Detail() {
    return (
        <div className="w-full h-auto">
            <div>
                <button className="bg-gray text-[#386641] px-10 rounded-sm">Back</button>
            </div>
            <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5">
                <div
                    className="min-w-[350px] flex flex-col items-center justify-start py-10 bg-[#F7FBFF] shadow-md rounded-md">
                    <div className="w-[140px] h-[140px] bg-[#D9D9D9] shadow-md rounded-sm">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?ga=GA1.1.2106569735.1718215942&semt=ais_user"
                            alt="student.png"
                            className="size-full shadow-md rounded-sm"
                        />
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
                                <td>O+</td>
                                <td>172cm</td>
                                <td>85kg</td>
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
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Address :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Age :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Faculty :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Department :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Contact No :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Coming From :</td>
                            <td>Janith</td>
                        </tr>
                        </tbody>
                    </table>
                    <h5 className="font-bold underline">Parent/Guardian Details</h5>
                    <table className="w-full table-auto table mt-5">
                        <tbody>
                        <tr>
                            <td>Name :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Address :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Contact No :</td>
                            <td>Janith</td>
                        </tr>
                        <tr>
                            <td>Relationship to student :</td>
                            <td>Janith</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Detail;