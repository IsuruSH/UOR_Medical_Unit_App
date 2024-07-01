import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import "../../app/globals.css"

const CustomDatePicker: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const handleButtonClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    return (
        <div >
            <div className="border-2 border-gray rounded-lg h-auto w-auto date-picker-top p-1">
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="text-center w-32 focus:outline-none bg-transparent"
                    />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarDays}
                        className="text-gray bg-transparent"
                    />
                </div>
            </div>
            <div className="date-picker-bottom">
                <button onClick={handleButtonClick}>
                    <FontAwesomeIcon icon={faCalendarDays}
                                     className="w-5 h-5 text-gray bg-transparent"
                    />
                </button>
                {showDatePicker && (
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="text-center w-28 focus:outline-none bg-transparent border-2 border-gray rounded-lg"
                    />
                )}
            </div>
        </div>
    );
};

export default CustomDatePicker;