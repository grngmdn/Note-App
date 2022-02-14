import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NoteCard from '../components/NoteCard';


function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
 
  return (
    <Container>
      <Grid container spacing={2}>
          {notes.map(note => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} />
            </Grid>
            ))}
      </Grid>
    </Container>
  )

}

export default Notes;
