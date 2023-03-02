import React from 'react'
import { useState } from 'react'
import AddNote from './AddNote';

function NoteList() {
    const [notes, setNote] = useState([
        {id:1, title:"note 1"},
        {id:2, title:"note 2"},
        {id:3, title:"note 3"},
    ]);
    function newNote(title){
        setNote([
            ...notes,
            {id:notes.length+1, title: title}
        ]);
    
    }
  return (
    <div>
        <ul className='note-list'>
        {notes.map((note)=>(
            <li key={note.id}>{note.title}</li>
        ))}
    </ul>
    <AddNote newNote={newNote}/>
    </div>
  )
}

export default NoteList