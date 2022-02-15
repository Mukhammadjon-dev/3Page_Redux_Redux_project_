import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'

function LavozimModal({isOpen, toggleModal, stateUser, Allusers}) {

    const [inputVal, setInputVal] = useState([])


    function addUsers(e) {
        e.preventDefault()
        let d={
            id: stateUser.length === 0?1:stateUser[stateUser.length-1].id+1,
            name: e.target[0].value,
            Maosh: e.target[1].value
        }
        Allusers(d)
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader>Lavozim qo'shish</ModalHeader>
                <ModalBody>
                    <form onSubmit={addUsers} id="form" action="">
                        <input className="form-control my-2 border border-primary text-dark" placeholder="nomi" type="text"/>
                        <input className="form-control my-2 border border-primary text-dark" placeholder="maosh" type="text"/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button onClick={toggleModal} className="btn btn-dark">Chiqish</button>
                    <button type="submit" onClick={toggleModal} form="form" className="btn btn-primary">Saqlash</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

function updateState(state) {
    return {
        isOpen: state.LavozimReduser.active,
        stateUser: state.LavozimReduser.lavozimlar
    }
}

function updateDispatch(dispatch){
    return {
        Allusers: (users)=>{
            dispatch({
                type: 'ADD_USERS_LAVOZIM',
                payload: users
            })
        }
    }
}

const a = connect(updateState, updateDispatch)

export default a(LavozimModal)