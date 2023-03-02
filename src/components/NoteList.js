import React, { useContext } from 'react'
import {NoteContext} from '../context/noteContext'
import Note from './Note'

function NoteList() {
    const {notes, dispatch} = useContext(NoteContext);
  return notes.length > 0 ? (
    <div className='note-list'>
        <ul>
        {notes.map((note)=>(
            <Note key={note.id} note={note} dispatch={dispatch}/>
        ))}
    </ul>
    </div>
  ) : (
    <div className="empty">Henüz bir note eklenmediniz...</div>
  )
}

export default NoteList