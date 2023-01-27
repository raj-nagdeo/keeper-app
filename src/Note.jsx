import React from 'react';
import ReactDOM from 'react-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Note(props) {
    return <div className='notes col-md-6'>
        <h1 className='notes-title'>{props.title}</h1>
        <p className='notes-content'>{props.content}</p>
        <p onClick={()=>{
            props.onDelete(props.id)
        }}>
            <DeleteForeverIcon />
        </p>
        
    </div>
}
export default Note;