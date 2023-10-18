import React, { useState } from 'react';
import io from "socket.io-client"
const socket = io("http://localhost:3000")
const Chat = () => {
  const [username, setUserame] = useState("")
  const [ChatActive, setChatActive] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    const messageData = {
      message : newMessage,
      user : username,
      time : new Date(Date.now()).getHours() + ":" + 
      new Date(Date.now()).getMinutes,
    };
    socket.emit("send-message", messageData)

  }
  return (
    <section className=' pt-[160px]  bg-yellow-200
    flex justify-center items-center'>
      {
         ChatActive ? 
         <div>
          <div>

          </div>
         <h1 className='font-bold '>MEDIPLUS</h1>
         <div className='gap-1'>
          <form className='flex gap-1' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Type your message...'
            className='px-3 py-2 border-1 outline-none 
            rounded-md'
            onChange={(e)=>setNewMessage(e.target.value)}/>
            <button type='submit'
            className='bg-primaryColor text-white px-3 py-2 border-none 
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
          onChange={(e)=> setUserame(e.target.value)}
          />
          <button type='submit' 
          className='bg-primaryColor text-white px-3 py-2 border-none 
          outline-none rounded-md'
          onClick={()=> !username == "" && setChatActive(true)}>Start Chat</button>
         </div>}
  

    </section>
  )
}
export default Chat


