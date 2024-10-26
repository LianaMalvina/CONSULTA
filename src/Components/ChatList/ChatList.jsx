import React, { useState } from "react"; 
import ChatItem from "../ChatItem/ChatItem"; // Importa el componente ChatItem que se usará para mostrar mensajes.

const Chatlist = ({ mensajes }) => { // Define el componente Chatlist, que recibe un array de mensajes como prop.
    const [error, setError] = useState({ text: '', isError: false }); // Inicializa el estado para manejar errores.

    const handleSubmitMessage = (evento) => { // Función que maneja el envío de mensajes.
        // evento.preventDefault() previene el comportamiento por defecto del formulario (no recarga la página).
        evento.preventDefault();
        
        // Captura los valores del formulario.
        const formulario = new FormData(evento.target); // Crea un objeto FormData a partir del formulario enviado.
        const mensaje = formulario.get('mensaje'); // Obtiene el valor del campo de texto 'mensaje'.
        
        if (!mensaje) { // Verifica si el mensaje está vacío.
            setError({ isError: true, text: 'No has escrito nada' }); // Actualiza el estado de error si no hay mensaje.
        } else {
            // Si hay un mensaje, resetea el estado de error a su valor inicial.
            setError({ text: '', isError: false });
            const nuevoMensaje = { author: 'YO', text: mensaje, id: 5, hour: '20:22' }; // Crea un nuevo mensaje.
            mensajes.push(nuevoMensaje); // Agrega el nuevo mensaje al array de mensajes.
        }
    };

    return (
        <div>
            <div className="mensajes"> {/* Contenedor para los mensajes */}
                {
                    mensajes.map((mensaje) => { // Itera sobre el array de mensajes.
                        return (
                            <ChatItem key={mensaje.id} author={mensaje.author} text={mensaje.text} /> // Renderiza un ChatItem por cada mensaje.
                        );
                    })
                }
            </div>
            {/* Este es mi formulario de envío de mensajes */}
            <form onSubmit={handleSubmitMessage}> {/* Maneja el evento de envío del formulario. */}
                <input placeholder="Escriba algo..." name="mensaje" /> {/* Campo de texto para el mensaje. */}
                {error.isError && <span>{error.text}</span>} {/* Muestra un mensaje de error si existe. */}
                <button type="submit">Enviar mensaje</button> {/* Botón para enviar el mensaje. */}
            </form>
        </div>
    );
}

export default Chatlist; 




/* Explicación de cada paso:
Importaciones:

import React, { useState } from "react"; importa la biblioteca React y el hook useState, que se usa para manejar el estado dentro del componente.
import ChatItem from "../ChatItem/ChatItem"; importa el componente ChatItem, que se usará para mostrar los mensajes en la interfaz.
Definición del componente Chatlist:

const Chatlist = ({ mensajes }) => { define un componente funcional llamado Chatlist, que recibe un prop llamado mensajes, un array de objetos que representan los mensajes de chat.
Estado de error:

const [error, setError] = useState({ text: '', isError: false }); inicializa el estado error con un objeto que contiene un mensaje de error y un indicador booleano. Esto se utiliza para manejar errores al enviar mensajes.
Función handleSubmitMessage:

Esta función se ejecuta al enviar el formulario.
evento.preventDefault(); previene que la página se recargue al enviar el formulario.
const formulario = new FormData(evento.target); crea un objeto FormData para capturar los datos del formulario.
const mensaje = formulario.get('mensaje'); obtiene el valor del campo de texto mensaje.
Validación del mensaje:

if (!mensaje) { verifica si el campo de mensaje está vacío.
setError({ isError: true, text: 'No has escrito nada' }); actualiza el estado de error si el mensaje está vacío.
Si hay un mensaje, se reinicia el estado de error con setError({ text: '', isError: false });.
Creación de un nuevo mensaje:

const nuevoMensaje = { author: 'YO', text: mensaje, id: 5, hour: '20:22' }; crea un nuevo objeto de mensaje con un autor, texto, ID y hora.
mensajes.push(nuevoMensaje); agrega el nuevo mensaje al array mensajes.
Retorno del JSX:

return ( inicia el retorno de un bloque de JSX que define la estructura visual del componente.
Contenedor de mensajes:

<div className="mensajes"> crea un contenedor para los mensajes.
mensajes.map((mensaje) => { itera sobre el array de mensajes y renderiza un ChatItem para cada uno.
key={mensaje.id} asegura que cada mensaje tenga una clave única, lo que es importante para el rendimiento de React.
Formulario para enviar mensajes:

<form onSubmit={handleSubmitMessage}> asigna la función handleSubmitMessage al evento de envío del formulario.
<input placeholder="Escriba algo..." name="mensaje" /> crea un campo de texto para que el usuario escriba su mensaje.
{error.isError && <span>{error.text}</span>} muestra un mensaje de error si isError es verdadero.
<button type="submit">Enviar mensaje</button> crea un botón que envía el mensaje.
Exportación del componente:

export default Chatlist; permite que el componente Chatlist sea importado y utilizado en otros archivos.} */

//Version mejorada
/* const saludar = ({nombre, apellido}) => {

    console.log(`Hola soy ${nombre} ${apellido}` )
}
  

saludar({nombre: 'pedro', apellido: 'suarez'})
saludar({nombre: 'juan', apellido: 'suarez'}) */