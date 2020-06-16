import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';

import Input from '../Input/Input'
import Messages from '../Messages/Messages'


import '../Join/Join.css';
import './Chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://react-chat-pp.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('Joined', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages)

    return (
        <div className="bg">
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol sm="12" md="6" lg="4" xl="4">
                        <MDBCard className="bgbox my-5 ">
                            <div className=" ">
                            <div className=" cardy  ">
                                <MDBCardHeader className="teal darken-4 rounded-0 border-0 w-100 text-white pb-0">

                                    <div className="d-flex float-right">
                                        <a><i className="fas fa-video"></i></a>

                                        <a> <i className="fas fa-phone ml-3"></i></a>
                                    </div>

                                    <div className="d-flex" >

                                        <a href="/" className="small mr-3 text-white"><i className="fas fa-arrow-left"></i></a>

                                        <i className="fas fa-comments mr-2"></i> <h6>{name}  <span className="small d-flex"> {room} </span> <span className="small text-warning">online</span> </h6>
                                    </div>



                                </MDBCardHeader>
                                
                                    <div className="scrollbar pt-2">
                                    <div className="force-overflow">
                                <Messages messages={messages} name={name} />
                            </div>
                            </div>
                            </div>
                            </div>
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Chat;