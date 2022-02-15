export const DEL_XODIM = "DEL_XODIM";
export const XODIM_ACTIVE = "XODIM_ACTIVE";
export const ADD_USERS = "ADD_USERS";
export const EDIT_XODIM_ACTIVE = "EDIT_XODIM_ACTIVE";
export const ADD_NEW_USER_XODIM = "ADD_NEW_USER_XODIM";

export function setActive(toActive) {
  return {
    type: XODIM_ACTIVE,
    payload: toActive,
  };
}

export function allUsers(users) {
  return {
    type: ADD_USERS,
    payload: users,
  };
}
export function editactive(toActive) {
  return {
    type: EDIT_XODIM_ACTIVE,
    payload: toActive,
  };
}

export function delUser(id) {
  return {
    type: DEL_XODIM,
    payload: id,
  };
}
export function setXodimUsers(users) {
  return {
    type: ADD_NEW_USER_XODIM,
    payload: users,
  };
}

// Daraja Actions

export function newAddUsers(newuser) {
  return {
    type: "ADD_NEW_USER",
    payload: newuser,
  };
}
export function Allusers(users) {
  return {
    type: "ADD_USERS_DARAJA",
    payload: users,
  };
}
export function setDarajaUsers(users) {
  return {
    type: "ADD_NEW_USER_DARAJA",
    payload: users,
  };
}

export function DelUser(id) {
  return {
    type: "DEL_DARAJA",
    payload: id,
  };
}
