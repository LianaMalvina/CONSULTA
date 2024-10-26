import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 para generar identificadores únicos.

const workspaces_inicial = [ // Define un array de workspaces iniciales.
    {
        id: 1, // Identificador del workspace.
        name: 'Workspace 1', // Nombre del workspace.
        description: 'Workspace 1 description', // Descripción del workspace (opcional).
        img: 'https://picsum.photos/id/237/200/300', // Imagen del workspace (opcional).
        channels: [ // Array de canales dentro del workspace.
            {
                id: 1, // Identificador del canal.
                name: 'Canal 1', // Nombre del canal.
                messages: [ // Array de mensajes dentro del canal.
                    {
                        id: 1, // Identificador del mensaje.
                        author: 'Pepe', // Autor del mensaje.
                        text: 'Hola' // Texto del mensaje.
                    },
                    {
                        id: 2, // Identificador del mensaje.
                        author: 'Pepe 2', // Autor del mensaje.
                        text: 'Que tal?' // Texto del mensaje.
                    }
                ]
            },
            {
                id: 2, // Identificador del segundo canal.
                name: 'Consultas', // Nombre del canal.
                messages: [ // Array de mensajes dentro del canal.
                    {
                        id: 1, // Identificador del mensaje.
                        author: 'Pepe', // Autor del mensaje.
                        text: 'Hola' // Texto del mensaje.
                    },
                    {
                        id: 2, // Identificador del mensaje.
                        author: 'Pepe 2', // Autor del mensaje.
                        text: 'Que tal?' // Texto del mensaje.
                    }
                ]
            }
        ]
    },
    {
        id: 2, // Segundo workspace con la misma estructura que el primero.
        name: 'Workspace 1',
        description: 'Workspace 1 description',
        img: 'https://picsum.photos/id/237/200/300',
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    }
];

/** 
 * Esta función obtiene la lista de workspaces desde el local storage. 
 * Si no existen, guarda los workspaces iniciales y los devuelve.
 */
const obtenerWorkspaces = () => { // Función para obtener workspaces.
    let workspaces = localStorage.getItem('workspaces'); // Intenta obtener workspaces del local storage.
    if (workspaces) {  // Si existen, los convierte de JSON a objeto y los retorna.
        return JSON.parse(workspaces);
    } else { // Si no existen, guarda los workspaces iniciales en el local storage.
        localStorage.setItem('workspaces', JSON.stringify(workspaces_inicial));
        return workspaces_inicial; // Retorna los workspaces iniciales.
    }
};

const crearWorkspaces = (nuevoWorkspace) => { // Función para crear un nuevo workspace.
    nuevoWorkspace.id = uuidv4(); // Genera un ID único para el nuevo workspace.
    let workspaces = obtenerWorkspaces(); // Obtiene la lista actual de workspaces.
    workspaces.push(nuevoWorkspace); // Agrega el nuevo workspace a la lista.
    localStorage.setItem('workspaces', JSON.stringify(workspaces)); // Guarda la lista actualizada en el local storage.
};

const obtenerWorkspacesPorId = (id) => { // Función para obtener un workspace por su ID.
    let workspaces = obtenerWorkspaces(); // Obtiene la lista actual de workspaces.
    let workspace = workspaces.find(workspace => workspace.id == id); // Busca el workspace por su ID.
    return workspace; // Retorna el workspace encontrado.
};

// Exporta las funciones para que puedan ser utilizadas en otros módulos.
export { obtenerWorkspaces, crearWorkspaces, obtenerWorkspacesPorId };


/**Explicación de cada parte:
Importación de uuid:

import { v4 as uuidv4 } from 'uuid'; importa la función uuidv4, que se utiliza para generar identificadores únicos para los nuevos workspaces.
Definición de workspaces_inicial:

Este array contiene un conjunto de workspaces predefinidos con canales y mensajes. Cada workspace tiene un id, name, description, img, y un array de channels.
Función obtenerWorkspaces:

Esta función intenta obtener la lista de workspaces desde el local storage.
Si hay workspaces guardados, los convierte de JSON a objeto y los retorna.
Si no hay workspaces, guarda los workspaces iniciales en el local storage y los retorna.
Función crearWorkspaces:

Se encarga de crear un nuevo workspace.
Genera un ID único para el nuevo workspace usando uuidv4().
Obtiene la lista actual de workspaces y agrega el nuevo workspace a esa lista.
Finalmente, guarda la lista actualizada en el local storage.
Función obtenerWorkspacesPorId:

Esta función busca y retorna un workspace específico basado en su ID.
Llama a obtenerWorkspaces() para obtener la lista actual y usa find para localizar el workspace correspondiente.
Exportaciones:

export { obtenerWorkspaces, crearWorkspaces, obtenerWorkspacesPorId }; permite que estas funciones sean importadas y utilizadas en otros archivos.
Este conjunto de funciones y datos es útil para manejar la creación y obtención de workspaces en una aplicación, manteniendo la persistencia en el local storage. */