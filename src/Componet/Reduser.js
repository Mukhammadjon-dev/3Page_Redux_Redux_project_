import { ADD_USERS, DEL_XODIM, XODIM_ACTIVE } from "./Action";

export function XodimReduser(
  state = {
    xodimlar: [
      {
        id: 1,
        name: "Akmal",
        lastname: "Rixsiboyev",
        telefon: 909463334,
        lavozim: "Menejer",
        daraja: "Senior",
      },
      {
        id: 2,
        name: "Gayrat",
        lastname: "Rixsiboyev",
        telefon: 909463334,
        lavozim: "Dispatcher",
        daraja: "Middle",
      },
      {
        id: 3,
        name: "Iroda",
        lastname: "Rixsiboyev",
        telefon: 909463334,
        lavozim: "bekorchi",
        daraja: "Junir",
      },
    ],
    active: false,
    active1: false,
  },
  action
) {
  switch (action.type) {
    case DEL_XODIM:
      const xodimlar = [...state.xodimlar];
      xodimlar.splice(action.payload, 1);
      state = { ...state, xodimlar: xodimlar };
      break;
    case XODIM_ACTIVE:
      state.active = action.payload;
      state = { ...state, active: state.active };
      break;
    case ADD_USERS:
      const xodim = [...state.xodimlar];
      xodim.push(action.payload);
      state = { ...state, xodimlar: xodim };
      break;
    case "EDIT_XODIM_ACTIVE":
      state.active1 = action.payload;
      state = { ...state, active1: state.active1 };
      break;
    case "ADD_NEW_USER_XODIM":
      state = { ...state, xodimlar: action.payload };
      break;
  }
  return state;
}

export function LavozimReduser(
  state = {
    lavozimlar: [
      { id: 1, name: "Teamleader", Maosh: "2000$" },
      { id: 2, name: "Manager", Maosh: "1000$" },
      { id: 3, name: "Developer", Maosh: "800$" },
    ],
    active: false,
    editActive1: false,
  },
  action
) {
  switch (action.type) {
    case "DEL_LAVOZIM":
      const lavozimlar = [...state.lavozimlar];
      lavozimlar.splice(action.payload, 1);
      state = { ...state, lavozimlar: lavozimlar };
      break;
    case "LAVOZIM_ACTIVE":
      state.active = action.payload;
      state = { ...state, active: state.active };
      break;
    case "ADD_USERS_LAVOZIM":
      const lavozim = [...state.lavozimlar];
      lavozim.push(action.payload);
      state = { ...state, lavozimlar: lavozim };
      break;
    case "EDIT_LAVOZIM_ACTIVE":
      state.editActive1 = action.payload;
      state = { ...state, editActive1: state.editActive1 };
      break;
    case "ADD_NEW_USER_LAVOZIM":
      state = { ...state, lavozimlar: action.payload };
      break;
  }
  return state;
}

export function DarajaReduser(
  state = {
    darajalar: [
      { id: 1, name: "Junior", Bonus: 20 },
      { id: 2, name: "Middle", Bonus: 25 },
      { id: 3, name: "Senior", Bonus: 30 },
    ],
    active: false,
    editActive: false,
  },
  action
) {
  switch (action.type) {
    case "DEL_DARAJA":
      const darajalar = [...state.darajalar];
      darajalar.splice(action.payload, 1);
      state = { ...state, darajalar: darajalar };
      break;
    case "DARAJA_ACTIVE":
      state.active = action.payload;
      state = { ...state, active: state.active };
      break;
    case "ADD_USERS_DARAJA":
      const daraja = [...state.darajalar];
      daraja.push(action.payload);
      state = { ...state, darajalar: daraja };
      break;
    case "EDIT_DARAJA_ACTIVE":
      state.editActive = action.payload;
      state = { ...state, editActive: state.editActive };
      break;
    case "ADD_NEW_USER":
      const daraja1 = [...state.darajalar];
      daraja1.push(action.payload[0]);
      state = { ...state, darajalar: daraja1 };
      break;
    case "ADD_NEW_USER_DARAJA":
      state = { ...state, darajalar: action.payload };
      break;
  }
  return state;
}
