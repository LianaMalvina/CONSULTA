import React from 'react'

const ChannelItem = ({id, nombre}) => {
    /**recibo por props los datos de data_js nombre dde canales, mostrados en el componente  */
    return (
        <div key={id}>
            <a>
                {nombre}
            </a>
        </div>
    )
}

export default ChannelItem