import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Exercise from './Exercise';
import { MdControlPoint as Add, MdHourglassEmpty as Hg } from 'react-icons/md'

function ExerciseTable({setExerciseToEdit}) {

    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const onAdd = () => {
        history.push('/add');
    }
    // for switching between hourglass and add button while loading
    const add_button = <td onClick={onAdd}  id="add" className="icon-button-container" colSpan="6"><Add id="icon-add" className="icon-button"></Add></td>
    const wait_signifier = <td id="wait" className="icon-button-container" colSpan="6"><Hg id="hour-glass"/></td>
    const [componentAddWait, setComponentAddWait] = useState(
        add_button
    );
    
    const onLoad = async () => {
        const getResponse = await fetch('/exercises', { method : 'GET' });
        const data = await getResponse.json();
        setExercises(data);
        setComponentAddWait(add_button)
    };

    const onDelete = async (id, setComponentControl) => {
        const delResponse = await fetch(`/exercises/${id}`, { method : 'DELETE' });
        if (delResponse.status === 204) {
            setExercises(exercises.filter((exercise) => exercise._id !== id));
            setComponentControl();
        }
    };

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise);
        history.push('/edit');
    };

    useEffect(() => {
        setComponentAddWait(wait_signifier);
        onLoad();
    }, []);

    

    return (
        <>
            <table className="table">
                <caption>Exercises</caption>
                <thead>
                    <tr className="table-header">
                        <th className="name-header">Name</th>
                        <th className="reps-header">Reps</th>
                        <th className="weight-header">Weight</th>
                        <th className="unit-header">Units</th>
                        <th className="date-header">Date</th>
                        <th className="manage-header">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map( (exercise, index) => <Exercise 
                        exercise={exercise} 
                        onDelete={onDelete} 
                        onEdit={onEdit} 
                        key={index}
                    />)}
                    <tr>
                        {componentAddWait}
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ExerciseTable;