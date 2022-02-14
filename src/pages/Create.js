import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container"
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from "react-router-dom";



const style = {
    marginTop: 5,
    marginBottom: 5,
    display: "block"
}

function Create() {

    const history = useHistory();
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState("money")


    // Logic for handling validation error and retrieving the form data
    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)

        return(
            title == "" ? setTitleError(true) : null,
            details == "" ? setDetailsError(true) : null,
            title && details ? 
                fetch("http://localhost:3000/notes", 
                {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({ title, details, category })
                }).then(() => history.push('/'))
                : null
        )
    }

  return (
    <Container>

        {/* Title of the page */}
        <Typography
            variant='h6'
            color="textSecondary"
            component="h2"
            gutterBottom 
        >
            Create a new Note
        </Typography>

        {/* Form */}
        <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
        >

            {/* Empty text field  */}
            <TextField 
                onChange={(e) => setTitle(e.target.value)}
                variant='outlined'
                label="Title"
                color='primary'
                fullWidth
                required
                error={titleError}
                sx={{
                    ...style
                }}
            />
            <TextField 
                onChange={(e) => setDetails(e.target.value)}
                variant='outlined'
                label="Details"
                color='primary'
                fullWidth
                required
                multiline
                rows={4}
                error={detailsError}
                sx={{
                    ...style
                }}
            />

            {/* Radio Button*/}
            <FormControl sx={{...style}}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                </RadioGroup>
            </FormControl> 

            <br />

            {/* Submit Button */}
            <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                type="submit"
            >
            Submit
            </Button>
        </form>
    </Container>
  )
}

export default Create;