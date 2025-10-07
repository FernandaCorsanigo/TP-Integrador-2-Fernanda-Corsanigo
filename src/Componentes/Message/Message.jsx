import React from 'react'
import './Message.css'

function Message (propiedades){
    let claseMensaje = 'message_container'

    if(propiedades.author === 'Yo'){
        claseMensaje += ' me'
    } else {
        claseMensaje += ' other'
    }

    return(
    <div className={claseMensaje}>
        <h3 className="author_name">
            {propiedades.author}
        </h3>
        <div className='message'>
            <p className='message_text'>
                {propiedades.content}
            </p>
            <span className='message_time'>
                <span className='placeholder'></span>
                {propiedades.timestamp}
            </span>
        </div>
    </div>
    )
}

export default Message



