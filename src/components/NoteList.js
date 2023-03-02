import React from 'react'
import Note from './Note'

function NoteList({notes, removeNote}) {
  return notes.length > 0 ? (
    <div className='note-list'>
        <ul>
        {notes.map((note)=>(
            <Note key={note.id} note={note} removeNote={removeNote}/>
        ))}
    </ul>
    </div>
  ) : (
    <div className="empty">Henüz bir note eklenmediniz...</div>
  )
}

export default NoteList