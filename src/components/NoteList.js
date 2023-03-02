import React, { useEffect } from 'react'
import { useState } from 'react'
import AddNote from './AddNote';

function NoteList() {
    const [notes, setNote] = useState(
        JSON.parse(localStorage.getItem("notes")) ?? []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function newNote(title) {
        setNote([
            ...notes,
            { id: notes.length + 1, title: title }
        ]);
    }

    return (
        <div>
            <ul className='note-list'>
                {notes.map((note) => (
                    <li key={note.id}>{note.title}</li>
                ))}
            </ul>
            <AddNote newNote={newNote} />
        </div>
    )
}

export default NoteList