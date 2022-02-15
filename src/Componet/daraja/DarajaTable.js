import React, { useState } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faDesktop,
  faTimes,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import EditDarajaModal from "./EditDarajaModal";
import { DelUser, setDarajaUsers } from "../Action";

function DarajaTable({
  darajaUsers,
  DelUser,
  setDarajaUsers,
  toggleModal,
  editToggleModal,
  search,
}) {
  const [edituser, setedituser] = useState({});

  function EditModal(id) {
    editToggleModal();
    const newName = darajaUsers.filter((item) =>
      item.id === id ? item.name : ""
    );
    setedituser(newName[0]);
  }

  function saveEditModal() {
    let num = darajaUsers.map((item) =>
      item.id === edituser.id ? edituser : item
    );
    setDarajaUsers(num);
    editToggleModal();
  }

  return (
    <div>
      <EditDarajaModal
        edituser={edituser}
        editToggleModal={editToggleModal}
        setedituser={setedituser}
        saveEditModal={saveEditModal}
      />
      <Table>
        <thead>
          <tr>
            <th>
              <FontAwesomeIcon icon={faAtom} />
            </th>
            <th>Nomi</th>
            <th>Bonus</th>
            <th>
              <FontAwesomeIcon icon={faDesktop} />
            </th>
          </tr>
        </thead>
        <tbody>
          {darajaUsers
            .filter((summ) => {
              if (search === "") {
                return summ;
              } else if (
                summ.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return summ;
              }
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.Bonus}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => EditModal(item.id)}
                    style={{ marginRight: "14px", cursor: "pointer" }}
                    icon={faPen}
                  />
                  <FontAwesomeIcon
                    onClick={() => DelUser(index)}
                    style={{ cursor: "pointer" }}
                    icon={faTimes}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default connect(null, { setDarajaUsers, DelUser })(DarajaTable);
