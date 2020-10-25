import getFromLocalStorage from '../../helpers/getFromLocalStorage.js'
import saveToLocalStorage from '../../helpers/saveToLocalStorage.js'

const lsName = 'kandoUser'

let token = getFromLocalStorage(lsName)

export const initialState = {
  token,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      saveToLocalStorage(lsName, action.payload)
      return {
        ...initialState,
        token: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem(lsName)
      return {
        ...initialState,
        token: '',
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
