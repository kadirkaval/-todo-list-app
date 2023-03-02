const noteReducer = (state, action) =>{
    switch (action.type) {
        case "GET_NOTES":
            return action.notes;
        case "ADD_NOTE":
            return [
                ...state,
                {id:action.id, title:action.title, description:action.description}
            ]
        case "REMOVE_NOTE":
            return state.filter((note)=>note.id !== action.id);
        default:
            return state;
    }
}
export default noteReducer