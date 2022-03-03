import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import { useEffect, useRef, useState } from "react"


function ChatContainer() {
    
    const [form, updateForm] = useState({ message: "" });
    const [chatLog, updateLog] = useState([])

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = new WebSocket('ws://localhost:8080');

        socketRef.current.onmessage = ({data}) => {
            // const newData = JSON.parse(data)
            // data.text().then(txt => console.log(txt))
            let type = typeof(data)
            if (type === "object") {
                // data.text().then(txt => console.log(JSON.parse(txt)));
                return;
            }
            // console.log(JSON.parse(data));
        }
    },[socketRef, chatLog])

    function sendMessage(info) {
        socketRef.current.send(JSON.stringify(info))
        updateLog([...chatLog, info])
    }

    return (
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed chatLog={chatLog} updateLog={updateLog} />
            <ChatInput form={form} update={updateForm} sendMessage={sendMessage}/>
        </div>
    )
}

export default ChatContainer