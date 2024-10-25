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

    return (
        <div>
            <h1>{workspace.name}</h1>
            <Chatlist mensajes={mensajes} />
            <ChannelList canales={workspace.channels} titulo={'canales importantes'} />
            <ChannelList canales={canales} titulo={'mensajes directos'} />
        </div>
    )
}

export default WorkspaceScreen