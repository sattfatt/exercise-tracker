import React from 'react'
import EditTable from '../Components/EditTable'
import AnimatedHeader from '../Components/AnimatedHeader';
/* TODO: add a form table here and use the exerciseToEdit object to prefill it*/
function EditPage({exerciseToEdit}) {
    return (
        <>
            <AnimatedHeader text="Edit an exercise!"></AnimatedHeader>
            <EditTable exerciseToEdit={exerciseToEdit}></EditTable>
        </>
    );
}

export default EditPage;