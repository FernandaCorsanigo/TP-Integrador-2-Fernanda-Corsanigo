import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import './MessagesList.css'

const MessagesList = (props) => {
    
    const MessagesList_jsx= props.messages.map(
        function(message){
        return(
            <Message
            key={message.id}
            author={message.author}
            content={message.content}
            timestamp={message.timestamp}
            />
        )
        }
    )
    const bottom_reference = useRef(null)
    useEffect(
        () => {
            bottom_reference.current.scrollIntoView({behavior: "smooth"})
        },
        [props.messages]
    )
    return (
    <div className="messages-container">
        {MessagesList_jsx}
        <div ref={bottom_reference}></div>
    </div>
    )
}

export default MessagesList


