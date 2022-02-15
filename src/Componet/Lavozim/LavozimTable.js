import React,{useState} from 'react'
import { Table } from 'reactstrap';
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAtom, faDesktop, faTimes, faPen} from '@fortawesome/free-solid-svg-icons'
import EditLavozimModal from './EditLavozimModal';



function LavozimTable({lavozimUsers, setLavozimUsers, delUser, search, editToggleModal}) {

    const [edituser, setedituser] = useState({})

    function EditModal(id) {
        editToggleModal()
        const newName = lavozimUsers.filter(item=>item.id===id)
        setedituser(newName[0])
    }

    function saveEditModal() {
        let num = lavozimUsers.map(item=>item.id==edituser.id?edituser:item)
        setLavozimUsers(num)
        editToggleModal()
    }



    return (
        <div><EditLavozimModal 
                    saveEditModal={saveEditModal}  
                    EditModal={EditModal}  
                    editToggleModal={editToggleModal} 
                    lavozimUsers={lavozimUsers}
                    edituser={edituser}
                    setedituser={setedituser} />
            <Table>
                <thead>
                    <tr>
                        <th><FontAwesomeIcon icon={faAtom} /></th>
                        <th>Nomi</th>
                        <th>Maosh</th>
                        <th><FontAwesomeIcon icon={faDesktop} /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lavozimUsers.length !==0?lavozimUsers.filter(numm=>{
                            if(search === ''){
                                return numm
                            }else if(
                                numm.name.toLowerCase().includes(search.toLowerCase())
                            ){
                                return numm
                            }
                        }).map((item, index)=>  <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.Maosh}</td>
                            <td>
                                <FontAwesomeIcon onClick={()=>EditModal(item.id)} style={{marginRight: '14px', cursor: 'pointer'}} icon={faPen} />
                                <FontAwesomeIcon onClick={()=>delUser(index)} style={{cursor: 'pointer'}} icon={faTimes} />
                            </td>
                            
                        </tr> ):<h3>Kallani ishlatamiz!!</h3>
                    }
                </tbody>
            </Table>
        </div>
    )
}

function updateDispatch(dispatch) {
    return {
        delUser: (id)=>{
            dispatch({
                type: 'DEL_LAVOZIM',
                payload: id
            })
        },
        setLavozimUsers: (users) =>{
            dispatch({
                type: 'ADD_NEW_USER_LAVOZIM',
                payload: users

            })
        }
    }
}

const a = connect(null, updateDispatch)

export default a(LavozimTable)
