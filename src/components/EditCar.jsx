import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function EditCar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: ""
    })   
    


    const handChangeInput = event => {
        setCar({...car, [event.target.name]: event.target.value })
    }

    const handleClickOpen = () => {
        console.log(props)
        setCar(props.car)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateCar = () =>  {
        props.updateCar(car, props.car._links.car.href);
        setOpen(false);
    }


return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Edit 
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="brand"
                name="brand"
                value={car.brand}
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
                value={car.model}
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
                value={car.color}
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
                value={car.year}
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
                value={car.fuel}
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
                value={car.price}
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                onChange={event => handChangeInput(event)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={updateCar}>Add</Button>
                
            </DialogActions>
        </Dialog>

    </div>
)
}