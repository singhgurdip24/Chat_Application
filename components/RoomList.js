import React from 'react'

class RoomList extends React.Component {
    render () {
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your rooms:</h3>
                {   
                    this.props.rooms.map(
                        room=>{
                            return(
                                <li key={rooms.id} className="room">
                                    <a 
                                        onClick={()=>this.props.subscribeToRoom(room.id)}
                                        href="#">#{rooms.name}</a>
                                </li>
                            )
                        }
                    )
                }
                </ul>
            </div>
        )
    }
}

export default RoomList