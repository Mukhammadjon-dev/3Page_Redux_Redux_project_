import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { Allusers } from "../Action";

function DarajaModal({ toggleModal, active, isOpen, Allusers, stateUser }) {
  const [inputVal, setInputVal] = useState([]);

  function addUsers(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    let d = {
      id: stateUser.length === 0 ? 1 : stateUser[stateUser.length - 1].id + 1,
      name: e.target[0].value,
      Bonus: e.target[1].value,
    };
    Allusers(d);
  }

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader>Xodim qo'shish</ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={addUsers} action="">
            <input
              className="form-control my-2 border border-primary text-dark"
              placeholder="nomi"
              type="text"
            />
            <input
              className="form-control my-2 border border-primary text-dark"
              placeholder="bonus"
              type="text"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={toggleModal} className="btn btn-dark">
            Chiqish
          </button>
          <button
            onClick={toggleModal}
            type="submit"
            form="form"
            className="btn btn-primary"
          >
            Saqlash
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect(
  (state) => ({
    isOpen: state.DarajaReduser.active,
    stateUser: state.DarajaReduser.darajalar,
  }),
  { Allusers }
)(DarajaModal);
