import React from 'react'; // Importa la biblioteca React, necesaria para crear componentes.

const ChatItem = ({ author, text }) => { // Define el componente ChatItem como una función que recibe props.
    return (
        <div> // Crea un contenedor div para el elemento del chat.
            <div>{author}</div> // Muestra el nombre del autor del mensaje en un div.
            <p>{text}</p> // Muestra el texto del mensaje en un párrafo.
        </div>
    );
}

export default ChatItem; // Exporta el componente ChatItem para que pueda ser utilizado en otros archivos.


/**Explicación de cada paso:
Importación de React:

import React from 'react'; importa la biblioteca React. Es esencial para trabajar con componentes y JSX.
Definición del componente ChatItem:

const ChatItem = ({ author, text }) => { define un componente funcional llamado ChatItem, que recibe dos propiedades: author y text. Estas props representan el autor del mensaje y el contenido del mensaje, respectivamente.
Retorno del JSX:

return ( inicia el retorno de un bloque de JSX. JSX permite escribir una estructura similar a HTML dentro de JavaScript.
Contenedor principal (div):

<div> crea un contenedor principal para el elemento del chat. Este contenedor puede ser estilizado y manipulado como un único elemento.
Nombre del autor:

<div>{author}</div> muestra el nombre del autor del mensaje en un div. Esto permite que se destaque visualmente el nombre del autor.
Texto del mensaje:

<p>{text}</p> muestra el contenido del mensaje en un párrafo. Usar <p> es semánticamente correcto para el texto, ya que indica que es un bloque de contenido.
Cierre del bloque JSX:

</div> cierra el contenedor principal que se abrió anteriormente.
Exportación del componente:

export default ChatItem; permite que el componente ChatItem sea importado en otros archivos. Esto es crucial para poder utilizarlo en otras partes de la aplicación. */