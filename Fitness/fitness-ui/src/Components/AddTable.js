import React, {useState} from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function AddTable() {

    const history = useHistory();

    const getToday = () => {
            const date = new Date();
            return date.toISOString().split('T')[0];
        };

    const [name, setName] = useState('Default Exercise');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState('Ibs');
    const [date, setDate] = useState(getToday());

    const handleButton = () => {
        let exercise = {};
        exercise.name = name;
        exercise.reps = reps;
        exercise.weight = weight;
        exercise.unit = unit;
        exercise.date = date;
        addExercise(exercise);
        
    };

    

    const addExercise = async (exercise) => {
        const postResponse = await fetch(`/exercises`, 
        { 
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(exercise)
        });

        if (postResponse.status === 201) {
            alert("Exercise added successfully!");
        }

        history.push('/');
    }


    return (
            <table>
                <caption>
                    Add Exercise
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
                        <td className="text-input-container"><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input></td>
                        <td className="text-input-container"><input type="text" name="reps" value={reps} onChange={(e) => setReps(e.target.value)}></input></td>
                        <td className="text-input-container"><input type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input></td>
                        <td><div className="input-container"><select value={unit} onChange={(e) => setUnit(e.target.value)}>
                                                                <option value="Ibs">Ibs</option>
                                                                <option value="Kgs">Kgs</option>
                                                            </select></div></td>
                        <td className="text-input-container"><input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}></input></td>
                        
                    </tr>
                    <tr>
                    <td colSpan="5" className="icon-button-container" id="upload" onClick={handleButton}><MdCloudUpload id="icon-upload" className="icon-button"></MdCloudUpload></td>
                    </tr>
                </tbody>
            </table>
    )
}

export default AddTable;