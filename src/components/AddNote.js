import React, { useState } from 'react'

function AddNote({newNote}) {
  const [title, setTitle] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    newNote(title);
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title : </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input type="submit" value="Add Note" />
    </form>
  )
}

export default AddNote