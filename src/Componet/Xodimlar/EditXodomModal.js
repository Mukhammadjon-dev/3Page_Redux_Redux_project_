
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'
import React from "react";

function EditXodimModal({
                            isOpen,
                            saveEditModal,
                            setedituser,
                            editToggleModal,
                            edituser,
                        }) {


    const handleChangeModal = name => ({target: {value}}) => {

        setedituser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div>
            <Modal isOpen={isOpen} toggle={editToggleModal}>
                <ModalHeader>Xodimi o'zgartirish</ModalHeader>
                <ModalBody>
                    <form id="form" action="">
                        <input onChange={handleChangeModal('name')} value={edituser?.name}
                               className="form-control my-2 border border-primary text-dark" placeholder="nomi"
                               type="text"/>
                        <input onChange={handleChangeModal('lastname')} value={edituser?.lastname}
                               className="form-control my-2 border border-primary text-dark" placeholder="maosh"
                               type="text"/>
                        <input onChange={handleChangeModal('telefon')} value={edituser?.telefon}
                               className="form-control my-2 border border-primary text-dark" placeholder="maosh"
                               type="text"/>


                    </form>
                </ModalBody>
                <ModalFooter>
                    <button onClick={editToggleModal} className="btn btn-dark">Chiqish</button>
                    <button type="button" onClick={saveEditModal} form="form" className="btn btn-primary">Saqlash
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default connect((state) => ({isOpen: state.XodimReduser.active1, stateUser: state.XodimReduser.xodimlar}),null)(EditXodimModal)