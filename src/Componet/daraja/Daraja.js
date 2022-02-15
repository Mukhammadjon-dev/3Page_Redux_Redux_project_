import React, { useState } from "react";
import { connect } from "react-redux";
import DarajaTable from "./DarajaTable";
import DarajaModal from "./DarajaModal";

function Daraja({
  darajaUsers,
  active,
  activeState,
  editactive,
  editStateactive,
}) {
  const [search, setSearch] = useState("");

  const toggleModal = () => {
    const activeStat = !activeState;
    active(activeStat);
  };

  function editToggleModal() {
    const m = !editStateactive;
    editactive(m);
  }

  function getSearch(event) {
    const searchValue = event.target.value;
    console.log(searchValue);
    setSearch(searchValue);
  }

  return (
    <div>
      <DarajaModal toggleModal={toggleModal} />

      <div className="card">
        <div className="card-body">
          <div className="row ">
            <div className="col-md-4">
              <input
                onChange={getSearch}
                className="form-control"
                type="text"
              />
            </div>
            <div className="col-md-4 text-center ">
              <h1>Ilmiy darajalar</h1>
            </div>
            <div className="col-md-4 text-center">
              <button onClick={toggleModal} className="btn btn-dark">
                +Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <DarajaTable
                search={search}
                setSearch={setSearch}
                editToggleModal={editToggleModal}
                toggleModal={toggleModal}
                darajaUsers={darajaUsers}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function updateState(state) {
  return {
    darajaUsers: state.DarajaReduser.darajalar,
    activeState: state.DarajaReduser.active,
    editStateactive: state.DarajaReduser.editActive,
  };
}

function updateDispatch(dispatch) {
  return {
    active: (toActive) => {
      dispatch({
        type: "DARAJA_ACTIVE",
        payload: toActive,
      });
    },
    editactive: (toEditactive) => {
      dispatch({
        type: "EDIT_DARAJA_ACTIVE",
        payload: toEditactive,
      });
    },
  };
}

const a = connect(updateState, updateDispatch);
export default a(Daraja);
