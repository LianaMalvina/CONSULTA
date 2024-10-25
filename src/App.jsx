import React from 'react'
import ChannelList from './Components/ChannelList/ChannelList'
import Chatlist from './Components/ChatList/ChatList'
import { canales } from './Components/ChannelList/data_canales'
import { mensajes } from './Components/ChatList/mensajes'
import { Route, Routes } from 'react-router-dom'
import WorkspaceScreen from './Components/Screen/WorkspaceScreen'
import CreateWorkspaceScreen from './Components/Screen/CreateWorkspaceScreen'
import Workspace from './Components/Screen/Workspace'

function App() {

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
    <>
      <h1>Hola mundo</h1>
    

    <Routes>
      <Route path='/' element={<Workspace/>}/>
      <Route path='/workspace/:workspace_id' element={< WorkspaceScreen/>}/>
      <Route path='/new' element={<CreateWorkspaceScreen/>}/>
    </Routes>
    </>
  )
}

export default App
