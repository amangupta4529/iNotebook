import React, { useContext,useState }  from 'react'
import NoteContext from "../context/notes/NoteContext";

export default function Addnote() {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault({title:"",description:"",tag:""});
        addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""})
    }
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value});
        
    }


    return (
     <div className="container my-1">
      <h1>Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type='text'
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name='title'
            onChange={onchange}
            value={note.title}
            required
            maxLength='30'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            onChange={onchange}
            value={note.description}
          />
        </div>
        <div className="mb-3 form-label">
        <label className="form-label" htmlFor="tag">
           Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onchange}
            value={note.tag}
            maxLength='10'
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5 } onClick={handleClick} className="btn btn-primary">
          Add
        </button>
      </form >
      </div>
    )
}
