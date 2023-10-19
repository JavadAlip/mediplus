import React, { useState } from 'react';
import { useEffect } from 'react';
import io from "socket.io-client"
const socket = io("http://localhost:3000")
const Chat = () => {
  const [username, setUserame] = useState("")
  const [ChatActive, setChatActive] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    socket.on("received-message", (message) => {
      setMessages([...messages, message])
    })
    console.log(messages)
  }, [messages, socket])

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      message: newMessage,
      user: username,
      time: new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes(),
    };

    !newMessage == "" ? socket.emit("send-message", messageData)
      : alert("message cannot be empty");
    setNewMessage("");
  }
  return (
    <section className=' pt-[160px]  bg-gray-100
    flex justify-center items-center'>
      {
        ChatActive ?
          <div className='rounded-md w-full md:w-[80vw] lg:w-[40vw] mx-auto'>
            <h1 className='font-bold text-primaryColor text-center text-xl my-2 uppercase'>MEDIPLUS CHAT</h1>
            <div>
              <div className="overflow-y-scroll h-[80vh] lg:h-[60vh]">
                {messages.map((message, index) => {
                  return (
                    <div key={index} className={`flex rounded-l-md shadow-md my-5 w-fit ${username === message.user && "ml-auto"}`}>
                      <div className='bg-primaryColor text-white flex justify-center rounded-l-md items-center'>
                        <h3 className='font-bold text-lg px-2'>{message.user.charAt(0).toUpperCase()}</h3>
                      </div>
                      <div className='px-2 bg-white rounded-md'>
                        <span className='text-sm'>{message.user}</span>
                        <h3 className='font-bold'>{message.message}</h3>
                        <h3 className='text-xs text-right'>{message.time}</h3>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
            <div className='gap-1'>
              <form className='flex gap-2 md:gap-2 justify-between' onSubmit={handleSubmit}>
                <input type="text"
                  placeholder='Your message...'
                  className='px-3 py-2 w-full border-1 outline-none 
                  rounded-md'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)} />
                <button type='submit'
                  className='bg-primaryColor  text-white px-3 py-2 border-none 
                  outline-none rounded-md'>
                  Send
                </button>
              </form>
            </div>
          </div> :

          <div className='flex justify-center items-center gap-1'>
            <input type="text" className='text-center px-3 py-2 border-none outline-none rounded-md'
              placeholder='Username'
              value={username}
              onChange={(e) => setUserame(e.target.value)}
            />
            <button type='submit'
              className='bg-primaryColor text-white px-3 py-2 border-none 
          outline-none rounded-md'
              onClick={() => !username == "" && setChatActive(true)}>Start Chat</button>
          </div>}
    </section>
  )
}
export default Chat

