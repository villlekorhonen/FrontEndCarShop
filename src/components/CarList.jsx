import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from "@mui/material/Button";
import AddCar from "./AddCar";
import EditCar from "./EditCar";


export default function CarList() {
    const [cars, setCars] = useState([]);



    const fetchData = () => {
        fetch('http://carrestapi.herokuapp.com/cars')

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCars(data._embedded.cars); // Huomaa, että "_embedded" on oikein kirjoitettu
            })
            .catch(error => {
                console.error(error);
            });
    }

    const deleteCar = href => {
        const options = {
            method: 'delete',
        };
        fetch(href, options)
            .then(response => fetchData())
            .catch(error => console.error(error));
    }

    const saveCar = car => {
        const options = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        fetch('http://carrestapi.herokuapp.com/cars', options)
            .then(response => fetchData())
            .catch(error => console.error(error));
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(response => fetchData())
            .catch(error => console.error(error));
    }

    

    useEffect(() => {
        fetchData();
    }, []);




    const columns = [
        { field: "brand" },
        { field: "model" },
        { field: "year" },
        { field: "color" },
        { field: "fuel" },
        { field: "price" },
        {
            
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 100,
            cellRenderer: params => {
                return (
                    <EditCar car={params.data} updateCar={updateCar} />
                )
            }
        },
        {
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 100,
            cellRenderer: params => {
                return (
                    <Button
                        variant="text"
                        color="secondary"
                        onClick={() => deleteCar(params.value)}>
                        Delete
                    </Button>
                )
            }
        }
    ];





    return (
        <div>
            <AddCar saveCar={saveCar} />
            <div className="ag-theme-material"
                style={{ height: '700px', width: '1000px', margin: 'auto' }} >
                <AgGridReact
                    rowData={cars}
                    columnDefs={columns}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true,
                    }}
                >
                </AgGridReact>
            </div>
        </div>
    )
}