import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import { useEffect, useState } from "react"


function ChatContainer() {
    const [form, updateForm] = useState({ message: "" });
    const [chatLog, updateLog] = useState({})
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.onmessage = ({ data }) => {
            console.log(data, 'from server')
        }
    })

    function sendMessage(info) {

    }

    return (
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed log={chatLog} updateLog={updateLog} />
            <ChatInput form={form} update={updateForm} sendMessage={sendMessage}/>
        </div>
    )
}

export default ChatContainer