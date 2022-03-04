function MessageRender(props) {
    //logic for rendering each message goes here
    const {
        chatLog
    } = props;

    // no one likes a blank chat.
    if (chatLog.length === 0) {
        return <h6>Start Messaging Now</h6>
    }

    function timestamp() {
        const times = Date.now();
        console.log(times)
    }

    return (
        <div>
            {chatLog?.map((message, index) => (
                <div key={index}>
                    <div className="text-left mx-5 flex flex-col my-2">
                        <div className=" flex flex-row">
                            <img src="https://via.placeholder.com/50" className="m-0" />
                            <p className="mx-4">
                                <b>{message.from}</b>
                            </p>
                            <p>{timestamp()}</p>
                        </div>
                        <div className="ml-16">
                            <h4>{message.message}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageRender