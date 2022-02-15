import React,{useState} from 'react'
import {connect} from 'react-redux';
import { editactive, setActive} from "../Action";
import XodimModal from "./XodimModal";
import XodimTable from "./XodimTable";

function Xodimlar({isOpen,setActive,editactiveState,editactive,xodimUsers,} ) {
    const [search, setSearch]=useState('')
    const editToggleModal=()=>{
        const setActive1 = !editactiveState
        editactive(setActive1)
    }

    function toggleModal() {
        setActive(!isOpen)
    }
    const getSearch = (event) =>{

        setSearch(event.target.value)
    }
    return (

        <div><XodimModal toggleModal={toggleModal} />
          <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-md-4">
                          <input onChange={getSearch}  className={'form-control'} type="text"/>
                      </div>
                      <div className="col-md-4 text-center"><h1>Xodimlar</h1></div>
                      <div className="col-md-4 text-center">
                          <button onClick={toggleModal} className={'btn  btn-dark'}>+Add</button>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <XodimTable editToggleModal={editToggleModal} search={search} xodimUsers={xodimUsers}  />
                      </div>
                  </div>
              </div>
          </div>

        </div>
    );
}

export default connect((state)=>({isOpen: state.XodimReduser.active,editactiveState: state.XodimReduser.active1,xodimUsers:state.XodimReduser.xodimlar}),{editactive,setActive})(Xodimlar);