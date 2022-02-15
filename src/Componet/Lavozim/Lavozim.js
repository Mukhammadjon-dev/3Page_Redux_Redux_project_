import React,{useState} from 'react';
import {connect} from 'react-redux';
import LavozimTable from './LavozimTable'
import LavozimModal from './LavozimModal'

function Lavozim({lavozimUsers, activeState, active, activeEdit, editactive}) {

    const [search, setSearch] = useState('')

    const toggleModal=()=>{
        const setActive = !activeState
        active(setActive)
    }

    const editToggleModal=()=>{
        const setActive1 = !activeEdit
        editactive(setActive1)
    }

    function getSearch(e){
        const searchValue = e.target.value
        setSearch(searchValue)
    }

    return (
        <div><LavozimModal toggleModal={toggleModal} />
            <div className="card">
                <div className="card-body">
                    <div className="row ">
                        <div className="col-md-4">
                            <input onChange={getSearch} className="form-control" type="text"/>
                        </div>
                        <div className="col-md-4 text-center "><h1>Lavozimlar</h1></div>
                        <div className="col-md-4 text-center">
                            <button onClick={toggleModal} className="btn btn-dark">+Add</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <LavozimTable editToggleModal={editToggleModal} search={search} lavozimUsers={lavozimUsers}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function updateState(state) {
    return {
        lavozimUsers: state.LavozimReduser.lavozimlar,
        activeState: state.LavozimReduser.active,
        activeEdit: state.LavozimReduser.editActive1
    }
}

function updateDispatch(dispatch){
    return {
        active: (toActive)=>{
            dispatch({
                type: 'LAVOZIM_ACTIVE',
                payload: toActive
            })
        },
        editactive: (toActiv)=>{
            dispatch({
                type: 'EDIT_LAVOZIM_ACTIVE',
                payload: toActiv
            })
        }
    }
}

const a = connect(updateState, updateDispatch)

export default a(Lavozim)
