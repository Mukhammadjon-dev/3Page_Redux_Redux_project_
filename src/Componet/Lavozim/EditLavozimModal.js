import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'

function EditLavozimModal({isOpen, 
 
    saveEditModal, 
    setedituser, 
    editToggleModal,
     edituser,
  }) {




    const handleChangeModal = name =>({target: {value}})=>{
        
        setedituser(prev=>({
            ...prev,
            [name]:value
        }))
    }
    return (
        <div>
            <Modal isOpen={isOpen} toggle={editToggleModal}>
                <ModalHeader>Lavozim o'zgartirish</ModalHeader>
                <ModalBody>
                    <form  id="form" action="">
                        <input onChange={handleChangeModal('name')} value={edituser?.name} className="form-control my-2 border border-primary text-dark" placeholder="nomi" type="text"/>
                        <input onChange={handleChangeModal('Maosh')} value={edituser?.Maosh} className="form-control my-2 border border-primary text-dark" placeholder="maosh" type="text"/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button onClick={editToggleModal} className="btn btn-dark">Chiqish</button>
                    <button type="button" onClick={saveEditModal} form="form" className="btn btn-primary">Saqlash</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

function updateState(state) {
    return {
        isOpen: state.LavozimReduser.editActive1,
        stateUser: state.LavozimReduser.lavozimlar
    }
}

function updateDispatch(dispatch) {
    return{
        // newAddUsers: (newuser)=>{
        //     dispatch({
        //         type: 'ADD_NEW_USER_LAVOZIM',
        //         payload: newuser
        //     })
        // }
    }
}

const a = connect(updateState, updateDispatch)

export default a(EditLavozimModal)
