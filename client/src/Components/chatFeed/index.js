import MessageRender from "../messageRender";

function ChatFeed(props) {
    const {
        chatLog,
    } = props;

    return(
        <section className="h-96 overflow-y-scroll flex flex-col-reverse">
            <MessageRender chatLog={chatLog}/>
        </section>
    )
}
export default ChatFeed