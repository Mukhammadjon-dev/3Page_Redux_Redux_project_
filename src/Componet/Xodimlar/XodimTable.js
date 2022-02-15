import React,{useState} from 'react'
import { Table } from 'reactstrap';
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAtom, faDesktop} from '@fortawesome/free-solid-svg-icons';
import XodimItems from './XodimItems'
import EditXodimModal from "./EditXodomModal";
import {delUser, setXodimUsers} from "../Action";


function XodimTable({editToggleModal, xodimUsers, delUser, search, setXodimUsers, lavozimItems, darajaItems}) {

    const [edituser, setedituser] = useState({})

    function EditModal(id) {
        editToggleModal()
        const newName = xodimUsers.filter(item=>item.id===id)
        setedituser(newName[0])
    }

    function saveEditModal() {
        let num = xodimUsers.map(item=>item.id===edituser.id?edituser:item)
        setXodimUsers(num)
        editToggleModal()
    }

    return (<>
            <EditXodimModal
                editToggleModal={editToggleModal}
                saveEditModal={saveEditModal}
                edituser={edituser}
                setedituser={setedituser} />
            <Table>

                <thead>
                <tr>
                    <th><FontAwesomeIcon icon={faAtom} /></th>
                    <th>Ism</th>
                    <th>Familiya</th>
                    <th>Telefon</th>
                    <th>Lavozim</th>
                    <th>Ilmiy daraja</th>
                    <th><FontAwesomeIcon icon={faDesktop} /></th>
                </tr>
                </thead>
                <tbody>
                {
                     xodimUsers.filter(numm=>{
                        if(search === ''){
                            return numm
                        }else if(
                            numm.name.toLowerCase().includes(search.toLowerCase()) ||
                            numm.lastname.toLowerCase().includes(search.toLowerCase()) ||
                            numm.lavozim.toLowerCase().includes(search.toLowerCase()) ||
                            numm.daraja.toLowerCase().includes(search.toLowerCase())
                        ){
                            return numm
                        }
                    }).map((item, index) => <XodimItems key={index}
                                                        lavozimItems={lavozimItems}
                                                        darajaItems={darajaItems}
                                                        item={item}
                                                        index={index}
                                                        delUser={delUser}
                                                        EditModal={EditModal}
                    /> )
                }
                </tbody>
            </Table>
    </>

    )
}


export default connect((state)=>({lavozimItems: state.LavozimReduser.lavozimlar,
    darajaItems: state.DarajaReduser.darajalar,}),({delUser,setXodimUsers}))(XodimTable)
