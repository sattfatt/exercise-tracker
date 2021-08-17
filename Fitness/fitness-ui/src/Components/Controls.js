import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MdAdd, MdEdit as Edit, MdDelete as Delete } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { MdHourglassEmpty as Hg } from 'react-icons/md'

function Controls({exercise, onDelete, onEdit}) {

    const [componentControl, setComponentControl] = useState();

    return (
        <div>
            <Edit id="icon-edit" className="icon-button" onClick={() => onEdit(exercise)}></Edit>
            <Delete id="icon-delete" className="icon-button" onClick={() => {setComponentControl(<Hg id="hour-glass" className="icon-button"/>); onDelete(exercise._id, setComponentControl)}}></Delete>
            {componentControl}
        </div>
    );
}

export default Controls;