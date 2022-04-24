import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateDate } from "../features/todosReducer";

const UpdateDate = ({todo}) => {

    const dispatch = useDispatch();
    const [date, setDate] = useState(todo);

    const handleDateChange = (e) => {
        setDate({
            ...todo,
            date: e.target.value
        })
    }

    useEffect(() => {
        dispatch(updateDate(date));
    }, [date, dispatch]);

    return (
        <>
            <input 
                type="date" 
                className="form-input text-center w-2/4"
                value={date.date}
                onChange={handleDateChange}
            />
        </>
    );
};

export default UpdateDate;
