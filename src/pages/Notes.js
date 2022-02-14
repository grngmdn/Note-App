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
        <Grid item md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      {notes.map(note => <p key={note.id}>{note.title}</p>)}
    </Container>

  )

}

export default Notes;
