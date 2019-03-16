import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator } from './config'
class App extends React.Component {

    constructor(){
        super();
        this.state = {
            messages:[],
            joinableRooms:[],
            joinedRooms:[]
        }
        this.sendMessage=this.sendMessage.bind(this)
        this.getRooms=this.getRooms.bind(this)
        this.subscribeToRoom=this.subscribeToRoom.bind(this)
    }


    componentDidMount(){
        const chatManager=new Chatkit.ChatManager({
            instanceLocator,
            userId:'Alpha',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        chatManager.connect()
        .then(currentUser => {
            this.currentUser=currentUser
            this.getRooms();
            // this.subscribeToRoom(19931139);
    })
    .catch(err => console.log('error on connecting: ', errr))
    }

    subscribeToRoom(roomId){
        this.currentUser.subscribeToRoom({
            roomId:roomId,
            hooks:{
                onNewMessage: message=>{
                    this.setState({
                        messages: [...this.state.messages,message]
                    })
                }
            }
        })
    }

    getRooms(){
        this.currentUser.getJoinableRooms()
        .then(
            joinableRooms=>
            this.setState({
                joinableRooms,
                joinedRooms:this.currentUser.rooms
            })
        )
    }

    sendMessage(text){
        this.currentUser.sendMessage({
            text,
            roomId:19867586
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList subscribeToRoom={this.subscribeToRoom} 
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                <MessageList messages={this.state.messages}/>
                <SendMessageForm sendMessage={this.sendMessage}/>
                <NewRoomForm />
            </div>
        );
    }
}

export default App