import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import { useEffect, useRef, useState } from "react"


function ChatContainer() {
    
    const [form, updateForm] = useState({ message: "" });
    const [chatLog, updateLog] = useState({})

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = new WebSocket('ws://localhost:8080');

        socketRef.current.onmessage = ({ data }) => {
            console.log(data, '\n - from server')
        }
    }, [])

    function sendMessage(info) {
        console.log(info)
        socketRef.current.send(info)
    }

    return (
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed log={chatLog} updateLog={updateLog} />
            <ChatInput form={form} update={updateForm} sendMessage={sendMessage}/>
        </div>
    )
}

export default ChatContainer