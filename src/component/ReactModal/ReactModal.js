import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    // console.log(props.user.id);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button className="details btn btn-primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="btn btn-primary">Modalding</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="user-img">
                            <img src={props.user.picture.thumbnail} alt="" />

                        </div>
                        <h5>Name: {props.user.name.title} {props.user.name.first} {props.user.name.last}</h5>


                        <h5>Gender: {props.user.gender}</h5>
                        <h5>Country: {props.user.location.country}</h5>
                        <h5>Email:{props.user.email}</h5>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default ReactModal;