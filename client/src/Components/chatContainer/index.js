import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"
import {useState} from "react"


function ChatContainer() {

    const [form, updateForm] = useState({message: ""});
    const [chatLog, updateLog] = useState({})

    return(
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed log={chatLog} updateLog={updateLog}/>
            <ChatInput form={form} update={updateForm}/>
        </div>
    )
}

export default ChatContainer