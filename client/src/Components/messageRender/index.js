function MessageRender(props) {
    //logic for rendering each message goes here
    const {
        chatLog
    } = props;

        // no one likes a blank chat.
    if (chatLog.length === 0) {
        return <h6>Start Messaging Now</h6>
    }

    return (
        <div>
            {chatLog?.map((message, index) => (
                <div key={index}>
                    <img></img>
                    <p>{message.from}</p>
                    <div>
                        <h4>{message.message}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageRender