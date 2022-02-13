import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container"
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const style = {
    marginTop: 5,
    marginBottom: 5,
    display: "block"
}

function Create() {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // return(
        //     title && details === "" ? null : console.log(title, details)
        // )

        if (title && details) {
            console.log(title, details)
        }

    }

  return (
    <Container>
        <Typography
            variant='h6'
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a new Note
        </Typography>
        <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <TextField 
                onChange={ (e) => {
                    setTitle(e.target.value)
                }}
                variant='outlined'
                label="Title"
                color='secondary'
                fullWidth
                required
                sx={{
                    ...style
                }}
            />
            <TextField 
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
                variant='outlined'
                label="Details"
                color='secondary'
                fullWidth
                required
                multiline
                rows={4}
                sx={{
                    ...style
                }}
            />
            <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
            >
            Add
            </Button>
        </form>
    </Container>
  )

}

export default Create;