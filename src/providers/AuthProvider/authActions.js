export function login(dispatch, token) {
  dispatch({ type: 'LOGIN', payload: token });
}

export function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
}
