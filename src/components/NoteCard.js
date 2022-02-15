import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { green, pink, yellow, blue } from '@mui/material/colors';



function NoteCard({ note, handleDelete }) {

  return (
      <div>
          <Card elevation={1}>
              <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: () => {
                                if (note.category === "money") return yellow[700];
                                if (note.category === "todos") return green[700];
                                if (note.category === "reminders") return pink[700];
                                if (note.category === "work") return blue[700];
                            }
                        }}
                    >
                        {note.category[0].toUpperCase()}
                    </Avatar>
                } 
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
              />
              <CardContent>
                  <Typography
                    variant='body2'
                    color="textSecondary"
                  >
                      {note.details}
                  </Typography>
              </CardContent>
          </Card>
      </div>
  )
}

export default NoteCard;
