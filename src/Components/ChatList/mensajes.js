export const mensajes = [
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
 
  /**Explicación de cada parte:
Exportación:

export const mensajes = [...] significa que se está creando y exportando una constante llamada mensajes, que se puede importar en otros archivos de tu proyecto. Esto permite que otros componentes o módulos tengan acceso a esta lista de mensajes.
Estructura del array:

El valor de mensajes es un array que contiene varios objetos. Cada objeto representa un mensaje en un chat y tiene varias propiedades.
Propiedades de cada objeto:

hour: Representa la hora en la que se envió el mensaje. Está en formato de 12 horas (AM/PM).
author: El nombre de la persona que envió el mensaje.
text: El contenido del mensaje que se envió.
id: Un identificador único para cada mensaje. Esto es útil para diferenciarlos y manejarlos en aplicaciones, especialmente cuando se renderizan en listas.
Ejemplo de uso:
Este array de mensajes puede ser utilizado en un componente de chat para mostrar los mensajes enviados por diferentes autores, junto con la hora en que fueron enviados. Por ejemplo, podrías mapear sobre este array en un componente para crear elementos de la interfaz que muestren cada mensaje en el chat.

Si tiene */