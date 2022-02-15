import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';


function NoteCard({ note, handleDelete }) {
  return (
      <div>
          <Card elevation={1}>
              <CardHeader 
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
