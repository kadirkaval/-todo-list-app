import React from 'react'

function Navbar({notes}) {
  return (
    <div>
        <h1>Navbar</h1>
        <p>Toplam {notes.length} adet not mevcut.</p>
    </div>
    
  )
}

export default Navbar