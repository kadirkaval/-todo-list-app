import { createContext } from "react";
import noteReducer from '../reducer/notesReducer';
import React, { useEffect, useReducer } from 'react'

export const NoteContext = createContext();

function NotesContextProvider(props) {
    const [notes, dispatch]=useReducer(noteReducer, [])
     useEffect(() => {
         if (localStorage.getItem("notes")) {
            dispatch({
             type:"GET_NOTES",
             notes:JSON.parse(localStorage.getItem("notes"))
            })
         }
     }, []);
 
     useEffect(() => {
         localStorage.setItem("notes", JSON.stringify(notes));
     }, [notes]);   
     return (
        <NoteContext.Provider value={{notes, dispatch}}>
            {props.children}
        </NoteContext.Provider>
     )
}
export default NotesContextProvider
