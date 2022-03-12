function ChatInput(props) {
    const {
        form,
        update,
        sendMessage
    } = props

    function timestamp() {
        const times = new Date();
        let night = false
        var minutes = times.getMinutes()
        var hours = times.getHours()
        if (hours > 12) {
            night = true
            hours = hours - 12
        }
        var newHours = hours.toString()
        var newMinutes = minutes.toString()
        if (minutes < 10) {
            newMinutes = 0 + newMinutes
        }
        if (night) {
            return `${newHours}:${newMinutes} Pm`
        }
        return `${newHours}:${newMinutes} Am`
    }

    return(
        <form
            // Setting up the added stuff like this really makes it more readable even if it makes the tag feel a little fat.
            className="w-full flex justify-around rounded-b-2xl border-t-2 border-dashed border-white h-14 text-lg"
            
            onSubmit={(e) => {
                e.preventDefault()
                // For now its just a log so we know the message is being captured properly
                sendMessage(form)
                // i need to add a time stamp here for when the message is saved so it doesn't rerender the timestamp as current.                
                update({
                    message: "",
                    from: "you",
                    timestamp: timestamp()
                })
            }}
            >
            <input className="w-10/12 m-2 shadow-inner rounded-2xl resize-none px-2 border-none" value={form.message} onChange={(e) => update({
                message: e.target.value, from: "you", timestamp: timestamp()
            })}/>
            <button className="rounded-full bg-purple w-2/12 m-2 text-white hover:text-black hover:bg-white">send</button>
        </form>
    )
}

export default ChatInput