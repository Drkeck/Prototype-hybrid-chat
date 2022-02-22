import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"


function ChatContainer() {
    const socket = io();
    const [form, updateForm] = useState({ message: "" });
    const [chatLog, updateLog] = useState({})
    useEffect(() => {
        socket.on("connect", () => {
            console.log(socket.id)
        })
    })

    function sendMessage(info) {
        socket.broadcast.emit("hello", info)
    }

    return (
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed log={chatLog} updateLog={updateLog} />
            <ChatInput form={form} update={updateForm} sendMessage={sendMessage}/>
        </div>
    )
}

export default ChatContainer