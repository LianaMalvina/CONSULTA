//Buena practica
import React from 'react'
import ChannelItem from '../ChannelItem/ChannelItem'

const ChannelList = ({titulo, canales}) => {
/*recibo los datos de data_canales.js, canales que ya existían, importados de ChatItem.jsx*/ 

    return (
        <>
            <h1>{titulo}</h1>
            {
                canales.map((canal) => {
                return (
                   <ChannelItem key={canal.id} nombre={canal.name} id={canal.id}/>
                )})
            }
        </>
    )
}

export default ChannelList
