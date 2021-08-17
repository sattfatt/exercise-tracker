import React from 'react'
import AddTable from '../Components/AddTable'
import AnimatedHeader from '../Components/AnimatedHeader';

function AddPage() {
    return (
        <>
            <AnimatedHeader text="Add an exercise!"></AnimatedHeader>
            <AddTable></AddTable>
        </>
    );
}

export default AddPage;