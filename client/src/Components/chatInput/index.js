import {useState} from 'react'

function ChatInput(props) {
    const {
        form,
        update,
        sendMessage
    } = props

    return(
        <form
            // Setting up the added stuff like this really makes it more readable even if it makes the tag feel a little fat.
            className="w-full flex justify-around rounded-b-2xl border-t-2 border-dashed border-white h-14 text-lg"
            
            onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
                update({
                    message: ""
                })
                // For now its just a log so we know the message is being captured properly
                sendMessage(form)
            }}
            >
            <input className="w-10/12 m-2 shadow-inner rounded-2xl resize-none px-2 border-none" value={form.message} onChange={(e) => update({
                message: e.target.value
            })}/>
            <button className="rounded-full bg-purple w-2/12 m-2 text-white hover:text-black hover:bg-white">send</button>
        </form>
    )
}

export default ChatInput