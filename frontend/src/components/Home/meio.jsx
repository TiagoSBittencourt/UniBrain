import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './meio.css';

export default function MediaCard({ info = {} }) {
  const { image = '', title = 'Título Padrão', desc = 'Descrição Padrão' } = info;

  return (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 550,  // Altura fixa
        width: 300,   // Largura fixa de 300px
        boxSizing: 'border-box',
      }} className="rootmeio">
      
      <CardMedia
        component="img"
        alt="pensando"
        height="340" // Altura fixa para a imagem
        image={image}
        draggable="false"
      />
      
      <CardContent sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 110,
        }}>
        
        <Typography gutterBottom variant="h5" component="div" className="title2">
          {title}
        </Typography>
        
        <Typography variant="body2" className="desc">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}