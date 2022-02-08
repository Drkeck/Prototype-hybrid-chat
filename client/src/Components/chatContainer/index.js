import ChatFeed from "../chatFeed"
import ChatInput from "../chatInput"


function ChatContainer() {

    return(
        <div className="w-3/5 mx-auto mt-8 bg-white shadow-xl">
            <ChatFeed />
            <ChatInput />
            <p>i am the chat container</p>
        </div>
    )
}

export default ChatContainer