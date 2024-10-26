import React from 'react'; // Importa React para poder crear componentes.
import Chatlist from '../ChatList/ChatList'; // Importa el componente Chatlist.
import ChannelList from '../ChannelList/ChannelList'; // Importa el componente ChannelList.
import { canales } from '../ChannelList/data_canales'; // Importa datos de canales desde un módulo.
import { mensajes } from '../ChatList/mensajes'; // Importa datos de mensajes desde un módulo.
import { useParams } from 'react-router-dom'; // Importa el hook useParams para obtener parámetros de la URL.
import { obtenerWorkspacesPorId } from './data'; // Importa la función para obtener un workspace por su ID.

const WorkspaceScreen = () => { // Define el componente funcional WorkspaceScreen.
    const { workspace_id } = useParams(); // Desestructura el ID del workspace de los parámetros de la URL.
    const workspace = obtenerWorkspacesPorId(workspace_id); // Obtiene el workspace específico utilizando el ID.

    console.log(workspace); // Imprime el workspace en la consola para depuración.

    if (!workspace) { // Si no se encuentra el workspace, muestra un mensaje.
        return <div>No se encontró el workspace</div>;
    }

    // Datos de canales de ejemplo.
    const canales = [
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
    ];

    // Datos de mensajes de ejemplo.
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
    ];

    return (
        <div>
            <Chatlist mensajes={mensajes} /> {/* Renderiza el componente Chatlist con los mensajes importados */}
            <ChannelList canales={workspace.channels} titulo={'Canales Importantes'} /> {/* Renderiza ChannelList con 
            canales del workspace */}
            <ChannelList canales={canales} titulo={'Mensajes Directos'} /> {/* Renderiza ChannelList con canales de 
            ejemplo */}
        </div>
    );
}

export default WorkspaceScreen; // Exporta el componente para su uso en otros archivos.


/**Este código define un componente funcional llamado WorkspaceScreen, que muestra información
 *  sobre un workspace específico en una aplicación React. Utiliza el hook useParams para extraer 
 * el ID del workspace de la URL y luego obtiene los datos del workspace a través de una función importada.
 *  Si el workspace no se encuentra, muestra un mensaje de error. Se definen también arreglos de ejemplo 
 * para canales y mensajes. Finalmente, se renderizan listas de chat y canales, utilizando los datos
 *  obtenidos y ejemplos definidos dentro del componente. 
 * El componente se exporta para ser utilizado en otras partes de la aplicación */