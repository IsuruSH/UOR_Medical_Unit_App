"use client";

import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DoctorAvailability: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [markedDates, setMarkedDates] = useState<Date[]>([]);

    const handleDateChange = (date: Date | Date[] | null) => {
        if (date === null || Array.isArray(date)) return;
        setSelectedDate(date);
    };

    const markDate = () => {
        if (selectedDate && !markedDates.some(d => d.getTime() === selectedDate.getTime())) {
            setMarkedDates([...markedDates, selectedDate]);
        }
    }

    const resetDates = () => {
        setMarkedDates([]);
    };

    const tileClassName = ({date}: { date: Date }) => {
        if (markedDates.some(markedDate => markedDate.getTime() === date.getTime())) {
            return 'bg-blue-500 text-white rounded-full';
        }
        return '';
    };

    return (
        <div className="w-auto flex flex-col items-center">
            <div className="space-y-4">
                <div>
                    <h2 className="text-md font-bold">Select the date</h2>
                </div>
                <div className="shadow-md">
                    <Calendar
                        onChange={(date) => handleDateChange(date as Date | null)}
                        value={selectedDate}
                        tileClassName={tileClassName}
                        selectRange={false}
                    />
                </div>
                <div className="w-full flex justify-between">
                    <button
                        onClick={markDate}
                        className="px-4 py-2 bg-[#00B69B] text-white rounded shadow-sm"
                    >
                        Mark Date
                    </button>
                    <button
                        onClick={resetDates}
                        className="px-4 py-2 bg-gray text-white rounded shadow-sm"
                    >
                        Reset Dates
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mt-4">Marked Dates:</h3>
                    <ul className="list-disc">
                        {markedDates.map((date, index) => (
                            <li key={index}>{date.toDateString()}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DoctorAvailability;
