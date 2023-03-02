import React from 'react'
import Note from './Note'

function NoteList({notes, removeNote}) {
  return (
    <div>
        <ul className='note-list'>
        {notes.map((note)=>(
            <Note key={note.id} note={note} removeNote={removeNote}/>
        ))}
    </ul>
    </div>
  )
}

export default NoteList