import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Tarea from './Tarea';
import FormTarea from './FormTarea';

let CrearTarea = () => {

    let [tareas, setTareas] = useState([]);

    let [showForm, setShowForm] = useState(false);

    useEffect(() => {
        let fetchTareas = async () => {
            try {
                let response = await fetch(process.env.REACT_APP_API_CLOUD);
                return response.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchTareas().then(res => setTareas(res.data));
    }, []);

    let deleteTarea = async (idx) => {
        try {
            await fetch(`${process.env.REACT_APP_API_CLOUD}/${tareas[idx].id}`, {
                method: 'DELETE'
            });
            setTareas(tareas.filter((val, i) => i !== idx));
        } catch (err) {
            console.log(err);
        }

    }

    let createTarea = (data) => {
        try {
            let nuevoId = 1
            if (tareas.length > 0) {
                nuevoId = tareas.reduce((acc, curr) => parseInt(acc.id) > parseInt(curr.id) ? acc : curr);
                nuevoId = (parseInt(nuevoId.id) + 1).toString();
            }
            data = { ...data, id: nuevoId };
            fetch(process.env.REACT_APP_API_CLOUD, {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json()).then(dataResponse => {
                setTareas([...tareas, dataResponse.data]);

                setShowForm(false);
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <br></br>
            <br></br>
            <button className="new-btn" onClick={() => setShowForm(!showForm)}>{showForm ? "Cerrar" : "Nueva tarea"}</button>
            {showForm && <FormTarea onClickFn={createTarea} btnTxt={"Agregar"}></FormTarea>}
            <div className="grid-container">
                {tareas.map((tarea, idx) => {
                    return (
                        <Tarea key={idx} tarea={tarea} onClickFn={deleteTarea} idx={idx} btnTxt={"Eliminar"} />

                    );
                })}
            </div>
        </>
    )
}

export default CrearTarea
