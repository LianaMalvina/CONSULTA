import React from 'react'
import Chatlist from '../ChatList/ChatList'
import ChannelList from '../ChannelList/ChannelList'
import { canales } from '../ChannelList/data_canales'
import { mensajes } from '../ChatList/mensajes'
import { useParams } from 'react-router-dom'
import { obtenerWorkspacesPorId } from './data'


const WorkspaceScreen = () => {
    const {workspace_id }= useParams()
    const workspace = obtenerWorkspacesPorId(workspace_id)
    console.log(workspace)
    if (!workspace) {
        return <div>No se encontró el workspace</div>;
      }

    const canales =[
        {
            id: 1,
            nombre: 'Consultas'
        },
        {
            id: 2,
            nombre: 'General'
        },
        {
            id: 3,
            nombre: 'Tareas'
        }
    ]


    const mensajes = [
      {
          hour: '11:06 PM',
          author: 'Pepe suarez',
          text: 'Hola a todos!',
          id: 1
      },
      {
          hour: '11:05 AM',
          author: 'Martina Sanchez',
          text: 'Que tal?',
          id: 2
      },
      {
          hour: '11:17 AM',
          author: 'Juancito',
          text: 'Muy mal, no se nada de HTML para el examen',
          id: 3
      }
    
    ]
    
    
    

    return (
        <div>
            
            <Chatlist mensajes={mensajes} />
            <ChannelList canales={workspace.channels} titulo={'canales importantes'} />
            <ChannelList canales={canales} titulo={'mensajes directos'} />
        </div>
    )
}

export default WorkspaceScreen