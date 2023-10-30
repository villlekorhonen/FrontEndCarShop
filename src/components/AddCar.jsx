import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function AddCar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: ""
    })   
    
    const { saveCar } = props;

    const handChangeInput = event => {
        setCar({...car, [event.target.name]: event.target.value })
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = () =>  {
        saveCar(car);
        setOpen(false);
    }


return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Add Car
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Car</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="brand"
                name="brand"
                label="Brand"
                type="text"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />

                <TextField
                autoFocus
                margin="dense"
                id="model"
                name="model"
                label="Model"
                type="text"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
                <TextField
                autoFocus
                margin="dense"
                id="color"
                name="color"
                label="Color"
                type="text"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
                <TextField
                autoFocus
                margin="dense"
                id="year"
                name="year"
                label="Year"
                type="number"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
                <TextField
                autoFocus
                margin="dense"
                id="fuel"
                name="fuel"
                label="Fuel"
                type="text"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
                <TextField
                autoFocus
                margin="dense"
                id="price"
                name="price"
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Add</Button>
                
            </DialogActions>
        </Dialog>

    </div>
)
}