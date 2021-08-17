import React from 'react'
import { Link } from 'react-router-dom'
import Controls from './Controls';

function Exercise({exercise, onDelete, onEdit}) {

    const formatDate = (dateStr) => {
        const dateArr = dateStr.split('-');
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];
        return [month, day, year].join('-'); 
    };

    return (
        <tr className="table-row">
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{formatDate(exercise.date)}</td>
            <td className="controls"><Controls 
                exercise={exercise} 
                onDelete={onDelete} 
                onEdit={onEdit}
                ></Controls></td>
        </tr>
    );
}

export default Exercise;