import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

function EditDarajaModal({
  editToggleModal,
  saveEditModal,
  setedituser,
  isOpen,
  edituser,
}) {
  const handleChangeModal =
    (name) =>
    ({ target: { value } }) => {
      setedituser((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={editToggleModal}>
        <ModalHeader>Xodim o'zgartirish</ModalHeader>
        <ModalBody>
          <form id="form1" action="">
            <input
              onChange={handleChangeModal("name")}
              value={edituser?.name}
              className="form-control my-2 border border-primary text-dark"
              placeholder="nomi"
              type="text"
            />
            <input
              onChange={handleChangeModal("Bonus")}
              value={edituser?.Bonus}
              className="form-control my-2 border border-primary text-dark"
              placeholder="bonus"
              type="text"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={editToggleModal} className="btn btn-dark">
            Chiqish
          </button>
          <button
            onClick={saveEditModal}
            type="button"
            form="form1"
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
    isOpen: state.DarajaReduser.editActive,
    stateUser: state.DarajaReduser.darajalar,
  }),
  null
)(EditDarajaModal);
