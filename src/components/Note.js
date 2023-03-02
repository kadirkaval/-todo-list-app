import React, { useContext } from 'react'
import {NoteContext} from '../context/noteContext'


function Note({note}) {
  const {dispatch} = useContext(NoteContext);
  function removeNote(id) {
    //setNote(notes.filter((note)=> note.id!==id));
    dispatch({
        type:"REMOVE_NOTE",
        id
    })
}
  return (
    <li onClick={()=>{removeNote(note.id)}}>
        <h1 className='title'>{note.title}</h1>
        <p>{note.description}</p>
    </li>
  )
}

export default Note