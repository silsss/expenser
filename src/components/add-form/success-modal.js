import React from "react";
import Modal from 'react-modal';
import './success-modal.css'
import { Link } from "react-router-dom";

export const SuccessModal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "rgb(109, 139, 116)",
        },
    }
    
    return <Modal isOpen={modalOpen} style={customStyles}>
        <div className="modal-inner">
            <label>Expense added successfully!</label>
            <i class="fi fi-br-smile-beam"></i>
        </div>
        <Link to="/">
        <div className="take-home-button">
            <i class="fi fi-rs-home"></i>
            Home
        </div>
        </Link>
        </Modal>
    }

