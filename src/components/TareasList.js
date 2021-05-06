import React, { useEffect, useState } from 'react';
import './Tabla.css';


let TareasList = () => {
    let [tareas, setTareas] = useState([]);

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


    return (
        <>
        <br></br> <br></br>
        <h3 className="titulo">{"Lista de tareas"}</h3>
        <br></br> 
                {tareas.map((tarea, idx) => {
                    return (
                        <div className="grid-item">
                        <h4 className="titulo">{tarea.name}</h4>
                        <h6 className="subtitulo">{`ID: ${tarea.id}`}</h6>
                        <h6 className="subtitulo">{`Materia: ${tarea.materia}`}</h6>
                        <h6 className="subtitulo">{`Puntos: ${tarea.puntos}`}</h6>
                        <h6 className="subtitulo">{`Fecha de entrega: ${tarea.fechaEntrega}`.slice(0,28)}</h6>
                        <h6 className="subtitulo">{`Fecha de creación: ${tarea.fechaCreacion}`.slice(0,29)}</h6>
                    </div> 
               
                    );
                })
                }             
        </>
    )
}

export default TareasList
