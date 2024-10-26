import React from 'react'
import { obtenerWorkspaces } from './data'
import { Link } from 'react-router-dom'

const Workspace = () => {
    const workspaces = obtenerWorkspaces()
    
  return (
    <div>
      <h1>entornos chotos</h1>
      {
       workspaces.map((workspace)=>{
        return(
            <div key={workspace.id}>
                <h3>{workspace.name}</h3>
                <Link to={`/workspace/${workspace.id}`}>Entras</Link>
            </div>
        )
       }) 
      }
<Link to='/new'>Crear entorno</Link>
    </div>
  )
}

export default Workspace
