import React from "react";

function Notes(){
    return (
        <div className="w-full p-5">
            <div className="w-full mb-5">
                <button className="bg-gray font-bold text-[#386641] px-8 rounded-sm">Back</button>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-full md:w-1/2">
                    <form className="w-full grid grid-cols-1 gap-5">
                        <div className="w-full grid grid-cols-2">
                            <label>Appointment ID :</label>
                            <input type="text" className="w-full border-2 border-gray rounded-md focus:outline-none bg-transparent"/>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <label>Name :</label>
                            <input type="text" className="w-full border-2 border-gray rounded-md focus:outline-none bg-transparent"/>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <label>Sc Number :</label>
                            <input type="text" className="w-full border-2 border-gray rounded-md focus:outline-none bg-transparent"/>
                        </div>
                        <div className="w-full grid grid-cols-2" >
                            <label>Notes :</label>
                            <textarea name="note" id="" placeholder="Enter notes" className="w-full h-32 border-2 border-gray rounded-md focus:outline-none bg-transparent"></textarea>
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

export default Notes;