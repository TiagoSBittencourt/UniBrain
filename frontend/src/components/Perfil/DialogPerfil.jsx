import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function CustomizedDialogs({ children }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="botaomudaravatar" 
      variant="contained" 
      onClick={handleClickOpen}
      sx={{
        position: "absolute",
        top:320,
        left:130,
        fontFamily: "'FiraSansBold', sans-serif",
      }}
      >
        Mudar o Avatar?
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Carregar Imagem</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
