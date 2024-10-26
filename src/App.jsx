import React from 'react'; // Importa React para poder utilizar JSX y crear componentes.
import ChannelList from './Components/ChannelList/ChannelList'; // Importa el componente ChannelList, que muestra la lista de canales.
import Chatlist from './Components/ChatList/ChatList'; // Importa el componente Chatlist, que muestra la lista de mensajes.
import { canales } from './Components/ChannelList/data_canales'; // Importa datos de canales desde un módulo (no se usa en este componente).
import { mensajes } from './Components/ChatList/mensajes'; // Importa datos de mensajes desde un módulo (no se usa en este componente).
import { Route, Routes } from 'react-router-dom'; // Importa componentes para manejar rutas en la aplicación.
import WorkspaceScreen from './Components/Screen/WorkspaceScreen'; // Importa la pantalla del workspace.
import CreateWorkspaceScreen from './Components/Screen/CreateWorkspaceScreen'; // Importa la pantalla para crear un nuevo workspace.
import Workspace from './Components/Screen/Workspace'; // Importa el componente Workspace que se mostrará en la ruta principal.

function App() { // Define el componente funcional App.

  return (
    <>
      <h1>Hola mundo</h1> {/* Renderiza un encabezado en la interfaz */}
    
      <Routes> {/* Comienza el bloque de rutas */}
        <Route path='/' element={<Workspace/>}/> {/* Ruta principal que renderiza el componente Workspace */}
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/> {/* Ruta que renderiza WorkspaceScreen, 
        usando un ID de workspace en la URL */}
        <Route path='/new' element={<CreateWorkspaceScreen/>}/> {/* Ruta para crear un nuevo workspace, 
        que renderiza CreateWorkspaceScreen */}
      </Routes>
    </>
  );
}

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos.

