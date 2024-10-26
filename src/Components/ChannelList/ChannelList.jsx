//Buena practica
import React from 'react'; // Importa la biblioteca React.
import ChannelItem from '../ChannelItem/ChannelItem'; // Importa el componente ChannelItem desde su ubicación.

const ChannelList = ({ titulo, canales }) => {
    /* 
     * Recibo los datos de `data_canales.js`, donde 
     * se encuentran los canales que ya existían. 
     * `titulo` es el título de la lista y `canales` 
     * es un array de objetos que representan los canales.
     */

    return (
        <>
            <h1>{titulo}</h1> // Muestra el título de la lista en un encabezado h1.
            {
                canales.map((canal) => { // Itera sobre el array `canales`.
                    return (
                        <ChannelItem // Renderiza un componente ChannelItem por cada canal.
                            key={canal.id} // Asigna una clave única basada en el ID del canal.
                            nombre={canal.name} // Pasa el nombre del canal como prop.
                            id={canal.id} // Pasa el ID del canal como prop.
                        />
                    );
                })
            }
        </>
    );
}

export default ChannelList; // Exporta el componente ChannelList para que pueda ser utilizado en otros archivos.

/**Explicación de cada paso:
Importación de React y ChannelItem:

import React from 'react'; importa la biblioteca React, necesaria para crear componentes.
import ChannelItem from '../ChannelItem/ChannelItem'; importa el componente ChannelItem, que se usará para representar cada canal en la lista.
Definición del componente ChannelList:

const ChannelList = ({ titulo, canales }) => { define un componente funcional que recibe dos props: titulo y canales. titulo es un texto para el encabezado y canales es un array de objetos que representan los canales.
Comentario sobre los props:

El comentario explica de dónde provienen los datos y cuál es el propósito de cada prop.
Retorno del JSX:

return ( inicia el retorno del JSX que define la estructura visual del componente.
Encabezado h1:

<h1>{titulo}</h1> muestra el título de la lista en un encabezado de nivel 1.
Iteración sobre el array canales:

canales.map((canal) => { utiliza el método map para iterar sobre el array de canales. Esto permite renderizar un componente ChannelItem por cada objeto en el array.
Renderización de ChannelItem:

Dentro del map, se devuelve un <ChannelItem /> para cada canal. Se le pasan key, nombre e id como props.
key={canal.id}: asigna una clave única para ayudar a React a identificar cada elemento en listas.
nombre={canal.name}: pasa el nombre del canal.
id={canal.id}: pasa el ID del canal.
Fragmento vacío (<>...</>):

El uso de <> y </> es un fragmento de React que permite agrupar múltiples elementos sin crear un nodo adicional en el DOM.
Exportación del componente:

export default ChannelList; permite que este componente sea importado y utilizado en otros archivos. */