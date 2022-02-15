import React, { useEffect, useState } from 'react';
import Container from "@mui/material/Container"
import NoteCard from '../components/NoteCard';
import Masonry from '@mui/lab/Masonry';


function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
 
  const handleDelete = async (id) => {
    await fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE"
    })

    const newNotes = notes.filter(note => notes.id !== id)
    setNotes(newNotes)
  }

  return (
    <Container>
      <Masonry columns={3} spacing={2}>
        {notes.map(note => (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
            ))}
      </Masonry>
    </Container>
  )

}

export default Notes;
