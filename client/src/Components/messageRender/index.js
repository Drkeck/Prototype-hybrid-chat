function MessageRender(props) {
    //logic for rendering each message goes here
    const {
        chatLog
    } = props;

    if (chatLog.length === 0) {
        return <h6>Empty Chat</h6>
    }
    return (

        <div>
            {chatLog?.map((message, index) => (
                <div key={index}>
                    <div>
                        <h4>{message.message}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageRender