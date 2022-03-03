import MessageRender from "../messageRender";

function ChatFeed(props) {
    const {
        chatLog,
        updateLog
    } = props;

    // console.log(log)
    //honestly unsure if i want to use the message render or just render it all here
    return(
        <section className="h-96 overflow-y-scroll ">
            <MessageRender chatLog={chatLog}/>
        </section>
    )
}
export default ChatFeed