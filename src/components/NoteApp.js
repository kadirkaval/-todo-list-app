import React, { useEffect } from 'react'
import { useState } from 'react'
import AddNote from './AddNote';
import NoteList from './NoteList';
import Navbar from './Navbar';


function NoteApp() {
    const [notes, setNote] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("notes")) {
            setNote(JSON.parse(localStorage.getItem("notes")))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function newNote(title, description) {
        setNote([
            ...notes,
            { id: notes.length + 1, title: title, description:description }
        ]);
    }

    function removeNote(id) {
        setNote(notes.filter((note)=> note.id!==id));
    }

    return (
        <div>
            <Navbar notes={notes}/>
            <NoteList notes={notes} removeNote={removeNote}/>
            <AddNote newNote={newNote} />
        </div>
    )
}

export default NoteApp