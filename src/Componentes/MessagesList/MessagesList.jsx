import React from 'react'
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

    return (
    <div className="messages-container">
        {MessagesList_jsx}
    </div>
    )
}

export default MessagesList


