import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import { useEffect, useRef, useState } from "react"


function ChatContainer() {
    
    const [form, updateForm] = useState({ message: "", from: "you" });
    const [chatLog, updateLog] = useState([])

    // we need to be able to call the websocket for sending messages without refreshing connections
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = new WebSocket('ws://192.168.1.229:8080');

        socketRef.current.onopen = (data) => {
            console.log(data)
        }

        socketRef.current.onmessage = ({data}) => {
            // check the type of data
            let type = typeof(data)
            if (type === "object") {
                // this is how we parse object data from the server.
                data.text().then(txt => {
                    let newMessage = JSON.parse(txt)
                    updatemessagelog(newMessage)
                });
                return;
            }
            // otherwise if not an object it should be just stringified json
            console.log(JSON.parse(data));
        }
    },[socketRef])

    function updatemessagelog(data) {
        console.log(data)
        updateLog(prevLog => ([...prevLog, data]))
    }

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