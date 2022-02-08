function ChatInput() {

    return(
        <form className="w-full flex justify-around rounded-b-2xl border-t-2 border-dashed border-white h-14 text-lg">
            <input className="w-10/12 m-2 shadow-inner rounded-2xl resize-none px-2"/>
            <button className="rounded-full bg-purple w-2/12 m-2 text-white hover:text-black hover:bg-white">send</button>
        </form>
    )
}

export default ChatInput