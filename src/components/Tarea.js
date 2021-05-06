import React from 'react'


let Tarea = ({ tarea, onClickFn, idx, btnTxt }) => {
    let clickTarea = () => {
        onClickFn(idx);
    }
    return (
        <div className="grid-item">
            <h3 className="titulo">{tarea.name}</h3>
            <h6 className="subtitulo">{`ID: ${tarea.id}`}</h6>
            <h6 className="subtitulo">{`Materia: ${tarea.materia}`}</h6>
            <h6 className="subtitulo">{`Puntos: ${tarea.puntos}`}</h6>
            <h6 className="subtitulo">{`Fecha de entrega: ${tarea.fechaEntrega}`.slice(0,28)}</h6>
            <h6 className="subtitulo">{`Fecha de creación: ${tarea.fechaCreacion}`.slice(0,29)}</h6>
            <button onClick={clickTarea} className="btn">{btnTxt}</button>     
        </div> 
                   
    )
}

export default Tarea
