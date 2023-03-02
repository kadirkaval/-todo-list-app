import React from 'react'
import { useState } from 'react'

function NoteList() {
    const [notes, setNote] = useState([
        {id:1, title:"note 1"},
        {id:2, title:"note 2"},
        {id:3, title:"note 3"},
    ]);
    const [text, setText] = useState('');
    function addNote(){
        setNote([
            ...notes,
            {id:notes.length+1, title: document.getElementById('input').value}
        ]);
        document.getElementById('input').value="";
    }
  return (
    <div>
        <ul className='note-list'>
        {notes.map((note)=>(
            <li key={note.id}>{note.title}</li>
        ))}
    </ul>
    <input id='input' type="text"/>
    <button onClick={addNote}>Ekle</button>
    </div>
  )
}

export default NoteList