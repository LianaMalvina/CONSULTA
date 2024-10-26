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
