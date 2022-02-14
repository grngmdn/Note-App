import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
 
  return (
    <Container>
      <Grid container>
          {notes.map(note => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <Paper>{note.title}</Paper>
            </Grid>
            ))}
      </Grid>
    </Container>
  )

}

export default Notes;
