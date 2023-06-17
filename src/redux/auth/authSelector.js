export const getIsLoggedIn = state => state.auth.isLoginIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
export const getUserError = state => state.auth.error;
export const getisRefreshing = state => state.auth.isRefreshing;

