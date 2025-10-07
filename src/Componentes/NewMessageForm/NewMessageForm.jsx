import React from 'react'
import './NewMessageForm.css'
import ICONS from '../constants/icons'


const NewMessageForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.message.value
        if (!message_value) return;
        props.onCreateNewMessage(
            message_value
        )

        form.message.value = ''
    }

    return (
        <div className='new-message-form-container'>
            <form onSubmit={handleSubmit}>
                <button type='button'>
                    <ICONS.Smile className='icon'/>
                </button>
                <button type='button'>
                    <ICONS.Paperclip className='icon'/>
                </button>
                <textarea 
                id='message' 
                name='message' 
                placeholder="Type a message"
                />
                <button type='submit'>
                    <ICONS.Send className='icon'/>
                </button>
            </form>
        </div>
    )
}

export default NewMessageForm