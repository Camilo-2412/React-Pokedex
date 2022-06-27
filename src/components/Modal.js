import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalGeneric = (props) =>{

    console.log(props)
    return(
        <Button onClick={props.modal}>
            <Modal isOpen={props.state}>
                <ModalHeader>
                    {props.pokemon}
                </ModalHeader>
            </Modal>

        </Button>
    )
}

export default ModalGeneric;