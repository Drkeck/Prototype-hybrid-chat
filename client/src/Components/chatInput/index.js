import {useState} from 'react'

function ChatInput(props) {
    const {
        form,
        update
    } = props

    // const [form, updateForm] = useState({message: ""});

    return(
        <form
            // Setting up the added stuff like this really makes it more readable even if it makes the tag feel a little fat.
            className="w-full flex justify-around rounded-b-2xl border-t-2 border-dashed border-white h-14 text-lg"
            onChange={(e) => update({
                message: e.target.value
            })}
            onSubmit={(e) => {
                e.preventDefault()
                console.log(form.message)
                // For now its just a log so we know the message is being captured properly
                // There will be another logic bit here to have this message sent and rendered to the chat feed.
            }}>
            <input className="w-10/12 m-2 shadow-inner rounded-2xl resize-none px-2 border-none"/>
            <button className="rounded-full bg-purple w-2/12 m-2 text-white hover:text-black hover:bg-white">send</button>
        </form>
    )
}

export default ChatInput