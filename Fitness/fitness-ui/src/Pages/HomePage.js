import React from 'react'
import { Link } from 'react-router-dom'
import ExerciseTable from '../Components/ExerciseTable'
import AnimatedHeader from '../Components/AnimatedHeader';

function HomePage({setExerciseToEdit}) {
    return (
        <>
            <AnimatedHeader text="Welcome to Exercise List!"></AnimatedHeader>
            <ExerciseTable setExerciseToEdit={setExerciseToEdit}></ExerciseTable>           
        </>
    );
}

export default HomePage;