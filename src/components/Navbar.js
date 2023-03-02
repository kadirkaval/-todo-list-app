import React, { useContext } from 'react'
import {NoteContext} from '../context/noteContext'

function Navbar() {
  const {notes} = useContext(NoteContext);
  return (
    <div className='navbar'>
        <h1>NoteApp</h1>
        <p>Toplam {notes.length} adet not mevcut.</p>
    </div>
    
  )
}

export default Navbar