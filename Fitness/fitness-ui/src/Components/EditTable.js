import React, {useEffect, useState} from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { useHistory } from 'react-router-dom';

function EditTable({exerciseToEdit}) {

    const history = useHistory();
    
    const [name, setName] = useState('');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (exerciseToEdit === undefined) {
            history.push('/');
        }
        else {
            setName(exerciseToEdit.name);
            setReps(exerciseToEdit.reps);
            setWeight(exerciseToEdit.weight);
            setUnit(exerciseToEdit.unit);
            setDate(exerciseToEdit.date)
        }
    }, []);


    const handleButton = (e) => {
        e.preventDefault();
        // here call the code to edit db
        let exercise = {}
        exercise.name = name
        exercise.reps = reps
        exercise.weight = weight
        exercise.unit = unit
        exercise.date = date

        editExercises(exercise);
        
    };

    const editExercises = async (exercise) => {
        const putResponse = await fetch(`/exercises/${exerciseToEdit._id}`, 
        { 
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(exercise)
        });

        if (putResponse.status === 200) {
            alert("Exercise edited successfully!");
        }

        history.push("/");
    };

    

    return (
            <table>
                <caption>
                    Edit Exercise
                </caption>
                <thead>
                    <tr>
                        <th className="name-header">Name</th>
                        <th className="reps-header">Reps</th>
                        <th className="weight-header">Weight</th>
                        <th className="unit-header">Units</th>
                        <th className="date-header">Date</th>                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className="input-container"><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></div></td>
                        <td><div className="input-container"><input type="text" value={reps} onChange={(e) => setReps(e.target.value)}></input></div></td>
                        <td><div className="input-container"><input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}></input></div></td>
                        <td><div className="input-container"><select value={unit} onChange={(e) => setUnit(e.target.value)}>
                                                                <option value="Ibs">Ibs</option>
                                                                <option value="Kgs">Kgs</option>
                                                            </select></div></td>
                        <td><div className="input-container"><input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input></div></td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="icon-button-container" id="upload" onClick={handleButton}><MdCloudUpload id="icon-upload" className="icon-button"></MdCloudUpload></td>
                    </tr>
                </tbody>
            </table>
    )
}

export default EditTable;