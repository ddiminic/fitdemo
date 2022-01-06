import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface SportCardProps {
   name: string,
   description: string,
   image: string,
   clicked: Function,
}

export const SportCard = ({name, description, image, clicked}: SportCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {clicked(name)}} size="small">Click me</Button>
      </CardActions>
    </Card>
  );
};