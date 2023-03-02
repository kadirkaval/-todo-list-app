import React from 'react'

function Note({note, removeNote}) {
  return (
    <li onClick={()=>{removeNote(note.id)}}>
        <h1 className='title'>{note.title}</h1>
        <p>{note.description}</p>
    </li>
  )
}

export default Note