import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import { crearWorkspaces, obtenerWorkspaces } from './data'; // Importa funciones para crear y obtener workspaces desde un módulo de datos.
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate para manejar la navegación entre rutas.

const CreateWorkspaceScreen = () => { // Define el componente CreateWorkspaceScreen.
    const [error, setError] = useState({ text: '', isError: false }); // Inicializa el estado de error.

    const navigation = useNavigate(); // Inicializa el hook de navegación.

    const handleSubmitNewForm = (evento) => { // Función que maneja el envío del formulario.
        evento.preventDefault(); // Previene la recarga de la página al enviar el formulario.
        const formulario = new FormData(evento.target); // Crea un objeto FormData para capturar los datos del formulario.

        const workspace = formulario.get('workspace'); // Obtiene el nombre del workspace del formulario.
        const canal = formulario.get('canal'); // Obtiene el nombre del canal del formulario.

        console.log(workspace, canal); // Muestra en consola los valores obtenidos.

        const nuevoWorkspace = { // Crea un nuevo objeto workspace.
            name: workspace, // Asigna el nombre del workspace.
            canales: [ // Crea un array de canales con el canal proporcionado.
                {
                    name: canal // Asigna el nombre del canal.
                }
            ]
        };

        crearWorkspaces(nuevoWorkspace); // Llama a la función para crear el workspace.
        obtenerWorkspaces(); // Llama a la función para obtener la lista actualizada de workspaces.
        navigation('/'); // Navega a la ruta principal después de crear el workspace.
    };

    return (
        <div>
            <h2>Crear Workspace</h2> {/* Título de la pantalla */}

            <form onSubmit={handleSubmitNewForm} className='formulario'> {/* Maneja el evento de envío del formulario */}

                <label htmlFor='w-space-name'>Nombre del Workspace</label><br />
                <input id='w-space-name' placeholder='Escribe el nombre del Workspace' name='workspace' /> {/* Campo para el nombre del workspace */}
                {error.isError && <span>{error.text}</span>} {/* Muestra un mensaje de error si existe */}
                <br /><br />

                <label htmlFor='canal-name'>Nombre del Canal</label><br />
                <input id='canal-name' placeholder='Escribe el nombre del canal' name='canal' /> {/* Campo para el nombre del canal */}
                {error.isError && <span>{error.text}</span>} {/* Muestra un mensaje de error si existe */}
                <br /><br />

                <button>Crear</button> {/* Botón para enviar el formulario */}
            </form>
        </div>
    );
}

export default CreateWorkspaceScreen; 

/**Explicación de cada parte:
Importaciones:

import React, { useState } from 'react'; importa React y el hook useState, que se usa para manejar el estado dentro del componente.
import { crearWorkspaces, obtenerWorkspaces } from './data'; importa funciones para crear y obtener workspaces desde un módulo local llamado data.
import { useNavigate } from 'react-router-dom'; importa el hook useNavigate, que se utiliza para manejar la navegación entre diferentes rutas de la aplicación.
Definición del componente CreateWorkspaceScreen:

const CreateWorkspaceScreen = () => { define un componente funcional llamado CreateWorkspaceScreen.
Estado de error:

const [error, setError] = useState({ text: '', isError: false }); inicializa un estado error para manejar posibles errores en la creación del workspace. Se establece un texto vacío y un indicador booleano.
Hook de navegación:

const navigation = useNavigate(); inicializa el hook para poder navegar programáticamente a otras rutas de la aplicación.
Función handleSubmitNewForm:

Se define la función que maneja el evento de envío del formulario.
evento.preventDefault(); previene la recarga de la página al enviar el formulario.
const formulario = new FormData(evento.target); crea un objeto FormData que captura todos los campos del formulario.
const workspace = formulario.get('workspace'); y const canal = formulario.get('canal'); obtienen los valores de los campos del formulario.
Creación de un nuevo workspace:

const nuevoWorkspace = {...}; crea un objeto que representa el nuevo workspace. Contiene el nombre del workspace y un array de canales.
crearWorkspaces(nuevoWorkspace); llama a la función para crear el nuevo workspace en el backend o en el estado.
obtenerWorkspaces(); llama a la función para obtener la lista actualizada de workspaces, aunque el manejo de la lista no se muestra aquí.
navigation('/'); redirige al usuario a la ruta principal después de que se ha creado el workspace.
Retorno del JSX:

return ( inicia el retorno de un bloque de JSX que define la estructura visual del componente.
Incluye un título, un formulario con campos para el nombre del workspace y del canal, y un botón para enviar el formulario.
Los campos están etiquetados y se manejan errores mediante la condición error.isError.
Exportación del componente:

export default CreateWorkspaceScreen; permite que el componente sea importado y utilizado en otros archivos. */
