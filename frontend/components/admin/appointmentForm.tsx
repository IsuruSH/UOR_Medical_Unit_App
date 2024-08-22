"use client"
import React, { useState } from 'react';

// const Popup = ({ message, onClose }: { message: string, onClose: () => void }) => (
//     <div className="fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50">
//         <div className="bg-dark text-white p-5 rounded shadow-lg">
//             <p>{message}</p>
//             <button className="mt-3 bg-light text-green-500 px-3 py-1 rounded text-dark text-sm hover:bg-darkl" onClick={onClose}>OK</button>
//         </div>
//     </div>
// );

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        Name: '',
        lastname: '',
        email: '',
        phonenum: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         body: JSON.stringify(formData),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }else{
        //         setShowPopup(true);
        //     }

        //     // Show success popup
            
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }

        // setFormData({
        //     Name: '',
        //     lastname: '',
        //     email: '',
        //     phonenum: '',
        //     message: ''
        // });
    };

    return (
        <div className='mt-2'>
            <div className='text-dark-green mb-3'>Book Appoinment</div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-row w-full gap-10 mb-16'>
                    <div className='w-1/3 flex flex-col gap-2'>
                        <label htmlFor="Name">Name</label>
                        <input type="text" id="Name" className='bg-slate-50 rounded-sm border' required value={formData.Name} onChange={handleChange} />
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" className='border-b-2' required value={formData.lastname} onChange={handleChange} />
                    </div>
                </div>
                <div className='flex flex-row w-full gap-20 mb-16'>
                    <div className='w-1/2 flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className='border-b-2' required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <label htmlFor="phonenum">Phone Number</label>
                        <input type="text" id="phonenum" className='border-b-2' required value={formData.phonenum} onChange={handleChange} />
                    </div>
                </div>
                <div className='w-full mb-20'>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className='border-b-2' value={formData.message} onChange={handleChange} />
                    </div>
                </div>
                <div className='flex justify-end text-darkl '>
                    <div>
                        <button type="submit" className='border-2 border-darkl px-5 py-1 shadow-md transition-colors duration-300 hover:bg-dark hover:text-white'>Send Message</button>
                    </div>
                </div>
            </form>
            {/* {showPopup && <Popup message="Message sent successfully!" onClose={() => setShowPopup(false)} />} */}
        </div>
    );
};

export default AppointmentForm;
