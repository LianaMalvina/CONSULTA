import {v4 as uuidv4} from 'uuid'

const workspaces_inicial = [
    {
        id: 1,
        name: 'Workspace 1',
        description: 'Workspace 1 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
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
    },
    {
        id: 2,
        name: 'Workspace 1',
        description: 'Workspace 1 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
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
]
/**esta funcion va al local storage a buscar la lista de arriba y ese valor lo va a guardar en la variable 
 * workspaces(data) lo que haya de datos
*/
const obtenerWorkspaces =()=>{//si ya hay canales de trabajo, entonces devuelve esos canales guardados creados
    let workspaces = localStorage.getItem('workspaces')
    if(workspaces){ return JSON.parse(workspaces)} /**retorna datos en objeto xq localStorage siempre devuelve string */
 
    else {//si no hay canales de trabajo, entonces devuelve los que existen de manera inicial
    localStorage.setItem('worspaces', JSON.stringify(workspaces_inicial))
    return workspaces_inicial
}
}
const crearWorkspaces = (nuevoWorkspace)=>{
 
    nuevoWorkspace.id = uuidv4
    let workspaces  = obtenerWorkspaces()
    workspaces.push(nuevoWorkspace)
   

localStorage.setItem('workspaces',JSON.stringify(workspaces))}

const obtenerWorkspacesPorId = (id)=>{
    let workspaces = obtenerWorkspaces()
    let workspace = workspaces.find(workspace => workspace == id)
    return workspace
}

export {obtenerWorkspaces, crearWorkspaces, obtenerWorkspacesPorId}


