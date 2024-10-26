import React from 'react'; // Importa React para poder crear componentes.
import { obtenerWorkspaces } from './data'; // Importa la función para obtener workspaces desde un módulo de datos.
import { Link } from 'react-router-dom'; // Importa el componente Link para manejar la navegación entre rutas.

const Workspace = () => { // Define el componente funcional Workspace.
    const workspaces = obtenerWorkspaces(); // Obtiene la lista de workspaces llamando a la función importar.

    return (
        <div>
            <h1>Entornos Chotos</h1> {/* Título de la página */}

            {
                workspaces.map((workspace) => { // Itera sobre cada workspace en el array obtenido.
                    return (
                        <div key={workspace.id}> {/* Cada div tiene una clave única basada en el ID del workspace */}
                            <h3>{workspace.name}</h3> {/* Muestra el nombre del workspace */}
                            <Link to={`/workspace/${workspace.id}`}>Entras</Link> {/* Enlace a la página del workspace específico */}
                        </div>
                    )
                }) 
            }

            <Link to='/new'>Crear entorno</Link> {/* Enlace para navegar a la página de creación de un nuevo workspace */}
        </div>
    )
}

export default Workspace; // Exporta el componente para que pueda ser utilizado en otros archivos.

/**Explicación de cada parte:
Importaciones:

import React from 'react';: Importa React, que es necesario para crear componentes de React.
import { obtenerWorkspaces } from './data';: Importa la función obtenerWorkspaces que se utiliza para obtener la lista de workspaces desde un módulo local llamado data.
import { Link } from 'react-router-dom';: Importa el componente Link de react-router-dom, que permite la navegación entre diferentes rutas de la aplicación sin recargar la página.
Definición del componente Workspace:

const Workspace = () => {: Define un componente funcional llamado Workspace.
Obtención de workspaces:

const workspaces = obtenerWorkspaces();: Llama a la función obtenerWorkspaces y almacena el resultado en la variable workspaces. Esto contiene la lista de workspaces que se mostrarán en la interfaz.
Retorno del JSX:

return ( inicia el retorno de un bloque de JSX que define la estructura visual del componente.
<h1>Entornos Chotos</h1>: Muestra un título en la parte superior de la página.
Renderización de workspaces:

workspaces.map((workspace) => { ... }): Itera sobre cada workspace en el array workspaces.
return ( dentro del map crea un nuevo elemento para cada workspace:
<div key={workspace.id}>: Cada div tiene una clave única basada en el id del workspace, lo que ayuda a React a identificar qué elementos han cambiado, son añadidos o eliminados.
<h3>{workspace.name}</h3>: Muestra el nombre del workspace.
<Link to={/workspace/${workspace.id}}>Entras</Link>: Crea un enlace que, al hacer clic, lleva a una ruta específica para ese workspace utilizando su ID. Esto permite que el usuario navegue a una vista detallada del workspace.
Enlace para crear un nuevo entorno:

<Link to='/new'>Crear entorno</Link>: Crea un enlace que lleva a la página para crear un nuevo workspace. Esto permite a los usuarios añadir nuevos entornos a la lista.
Exportación del componente:

export default Workspace;: Permite que el componente Workspace sea importado y utilizado en otros archivos de la aplicación.
Resumen:
Este componente Workspace muestra una lista de workspaces existentes y permite la navegación a una página específica para cada uno, así como la opción de crear un nuevo workspace. Es una parte clave de una interfaz de usuario que gestiona entornos de trabajo en una aplicación.  */