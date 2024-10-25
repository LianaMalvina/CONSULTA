import React, { useState } from 'react'
import { crearWorkspaces, obtenerWorkspaces } from './data'
import { useNavigate } from 'react-router-dom'


const CreateWorkspaceScreen = () => {
    const [error,setError]=useState({text:'',isError:false})

    const navigation = useNavigate()

    const handleSubmitNewForm = (evento) => {
        evento.preventDefault()
        const formulario = new FormData(evento.target)

        const workspace = formulario.get('workspace')
        const canal = formulario.get('canal')
   
        console.log(workspace,canal)
        

const nuevoWorkspace ={
    name: workspace,
    canales: [
        {
            name: canal
        }
    ]
}
crearWorkspaces(nuevoWorkspace)
obtenerWorkspaces()
navigation('/')


}




    return (
        <div>
            <h2>Crear Workspace</h2>

            <form onSubmit={handleSubmitNewForm} className='formulario'>



                <label htmlFor='w-space-name'>Nombre del Workspace</label><br />
                <input id='w-space-name' placeholder='Escribe el nombre del Worspace' name='workspace' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <label htmlFor='canal-name'>Nombre del Canal</label><br />
                <input id='canal-name' placeholder='Escribe el nombre del canal' name='canal' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <button>Crear</button>

            </form>
        </div>
    )
}

export default CreateWorkspaceScreen