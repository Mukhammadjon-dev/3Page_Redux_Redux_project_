
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux'
import {allUsers} from "../Action";
function XodimModal({isOpen, toggleModal, stateUser, allUsers}) {

    function addUsers(e) {
        e.preventDefault()
        let d={
            id: stateUser.length === 0?1:stateUser[stateUser.length - 1].id+1,
            name: e.target[0].value,
            lastname: e.target[1].value,
            telefon: e.target[2].value,
            lavozim: e.target[3].value,
            daraja: e.target[4].value
        }
        allUsers(d)
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleModal} >
                <ModalHeader>Xodim qo'shish</ModalHeader>
                <ModalBody>
                    <form onSubmit={addUsers} id={'form'} action="">
                        <input  className="form-control my-2 border border-primary text-dark" placeholder="Ism" type="text"/>
                        <input  className="form-control my-2 border border-primary text-dark" placeholder="Familiya" type="text"/>
                        <input  className="form-control my-2 border border-primary text-dark" placeholder="Telefon" type="text"/>
                        <select  className="form-control my-2 border border-primary"  >
                            <option value='jamoa sardori'>Jamoa sardori</option>
                            <option value="Developer">Developer</option>
                            <option value="Bekorchi">Bekorchi</option>
                        </select>
                        <select className="form-control my-2 border border-primary"  >
                            <option value="Senior">Senior</option>
                            <option value="Middle">Middle</option>
                            <option value="Junior">Junior</option>
                        </select>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button onClick={toggleModal} className="btn btn-dark">Chiqish</button>
                    <button onClick={toggleModal} type="submit" form={'form'} className="btn btn-primary">Saqlash</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default connect((state)=>({stateUser: state.XodimReduser.xodimlar,isOpen: state.XodimReduser.active}),{allUsers} ) (XodimModal)
