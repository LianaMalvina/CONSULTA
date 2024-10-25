import React from 'react'
import { obtenerWorkspaces } from './data'
import { Link } from 'react-router-dom'

const Workspace = () => {
    const workspaces = obtenerWorkspaces()
  return (
    <div>
      <h1>entornos chotos</h1>
      {
       workspaces.map((Workspace)=>{
        return(
            <div key={workspaces.id}>
                <h3>{Workspace.name}</h3>
                <Link to={'/workspace' + Workspace.id}>Entras</Link>
            </div>
        )
       }) 
      }
<Link to='/new'>Crear entorno</Link>
    </div>
  )
}

export default Workspace
