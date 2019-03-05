import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'alpha',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'beta',
        text: 'Great! How about you?'
    },
    {
        senderId: 'alpha',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {
                  DUMMY_DATA.map((message,index)=>{
                      return (
                          <div key={index} className='message'>
                            <div className='message-username'>{message.senderId}</div>
                            <div className='message-text'>{message.text}</div>
                          </div>
                      )
                  }
                  )  
                }
            </div>
        )
    }
}

export default MessageList