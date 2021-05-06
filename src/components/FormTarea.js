import React, { useState } from 'react'





let FormTarea = ({ onClickFn, btnTxt, initData }) => {

    let [nombre, setNombre] = useState(initData ? initData.nombre : "");
    let [materia, setMateria] = useState(initData ? initData.materia : "");
    let [puntos, setPuntos] = useState(initData ? initData.puntos : "");

    let [fechaEntrega, setFechaEntrega] = useState(initData ? initData.fechaEntrega : "");

    let onSubmit = (e) => {
        e.preventDefault();
        if (nombre === ""||materia === ""|| puntos === "" || fechaEntrega === "") alert("Rellene los campos");
        else {
            let data = { name: nombre, materia: materia, puntos: puntos, fechaEntrega: fechaEntrega }
            onClickFn(data);
        }
    };
    return (
        <div>
            <br></br>
            <form onSubmit={onSubmit}>
                <div className="formQ">
                    <label >Nombre: </label>
                    <input type="text" value={nombre} onChange={(txt) => setNombre(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Materia: </label>
                    <input type="text" value={materia} onChange={(txt) => setMateria(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Puntos: </label>
                    <input type="number" value={puntos} onChange={(txt) => setPuntos(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Fecha de entrega: </label>
                    <input type="date" value={fechaEntrega} onChange={(txt) => setFechaEntrega(txt.target.value)} />
                </div>
                <input className="input-btn" type="submit" value={btnTxt} />
                <br></br>
                <br></br>

            </form>
        </div>
    )
}

export default FormTarea
