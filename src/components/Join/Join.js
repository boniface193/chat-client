import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, MDBCardHeader } from 'mdbreact';

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="bg">
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol sm="12" md="6" lg="4" xl="4">
                        <MDBCard className="my-5">
                            <div className="d-flex justify-content-center">
                                <MDBCardHeader className="morpheus-den-gradient rounded-0 border-0 shadow w-75 text-center text-white">
                                    <h3 className="my-3">
                                        <i className="fas fa-comments "></i> Login:
                </h3>
                                </MDBCardHeader>
                            </div>
                            <MDBCardBody className="mx-4 my-0">
                                <MDBInput
                                    label="Name"
                                    group
                                    type="text"
                                    validate
                                    onChange={(event) => setName(event.target.value)}
                                    
                                />
                                <MDBInput
                                    label="Room"
                                    group
                                    type="text"
                                    validate
                                    containerClass="mb-0"
                                    onChange={(event) => setRoom(event.target.value)}

                                />
                                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                <div className="text-center">
                                    <MDBBtn
                                        type="submit"
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a"
                                    >
                                        Sign in
                </MDBBtn>
                                </div>
                                </Link>
                                <div className="row my-2 d-flex justify-content-center">
                                    <MDBBtn
                                        type="button"
                                        color="white"
                                        rounded
                                        className="mr-md-3 z-depth-1a"
                                    >
                                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                    </MDBBtn>
                                    <MDBBtn
                                        type="button"
                                        color="white"
                                        rounded
                                        className="mr-md-3 z-depth-1a"
                                    >
                                        <MDBIcon fab icon="twitter" className="blue-text" />
                                    </MDBBtn>
                                    <MDBBtn
                                        type="button"
                                        color="white"
                                        rounded
                                        className="z-depth-1a"
                                    >
                                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    )
}

export default Join;