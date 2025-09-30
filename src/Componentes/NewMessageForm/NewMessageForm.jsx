import React from 'react'

const NewMessageForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.message.value
        props.onCreateNewMessage(
            message_value
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>
                    <i className="bi bi-emoji-smile"></i>
                </button>
                <button>
                    <i className="bi bi-paperclip"></i>
                </button>
                <textarea id='message' name='message' placeholder="Type a message" />
                <button>
                    <i className="bi bi-send"></i>
                </button>
            </form>
        </div>
    )
}

export default NewMessageForm