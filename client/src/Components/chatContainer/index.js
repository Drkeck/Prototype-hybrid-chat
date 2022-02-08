import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"


function ChatContainer() {

    return(
        <div className="w-3/5 mx-auto mt-8 bg-[#dae0e5] shadow-inner rounded-2xl bg-silver">
            <ChatFeed />
            <ChatInput />
        </div>
    )
}

export default ChatContainer