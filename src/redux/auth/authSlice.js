import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurretUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoginIn: false,
    isFetchingCurrentUser: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoginIn = true;
        },
        [register.rejected](state, { payload }) {
            state.error = payload;
        },
        [logIn.pending](state) {
            state.isLodin = true;
        },
        [logIn.fulfilled](state, { payload }) {
            console.log(payload)
            state.user = payload.user;
            state.token = payload.token;
            state.isLoginIn = true;
        },
        [logIn.rejected](state, { payload }) {
            console.log(payload)
            state.error = payload;
        },

        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoginIn = false;
        },

        [fetchCurretUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurretUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoginIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurretUser.rejected](state, { payload }) {
            state.isFetchingCurrentUser = false;
            state.error = payload;
        },
    },
});

export const authReducer = authSlice.reducer;












// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, fetchCurretUser } from "./authOperations";

// // const initialState = {
// //     user: { name: null, email: null },
// //     token: null,
// //     isLoginIn: false,
// //     isFetchingCurrentUser: false,
// //     error: null,
// // };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: { name: null, email: null },
//         token: null,
//         isLoggedIn: false,
//         isRefreshing: false,
//     },

//     extraReducers: builder => {
//         builder
//             .addCase(register.fulfilled, (state, action) => {
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logIn.fulfilled, (state, action) => {
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logOut.fulfilled, state => {
//                 state.user = { name: null, email: null };
//                 state.token = null;
//                 state.isLoggedIn = false;
//             })
//             .addCase(fetchCurretUser.pending, state => {
//                 state.isRefreshing = true;
//             })
//             .addCase(fetchCurretUser.fulfilled, (state, action) => {
//                 state.user = action.payload;
//                 state.isLoggedIn = true;
//                 state.isRefreshing = false;
//             })
//             .addCase(fetchCurretUser.rejected, state => {
//                 state.isRefreshing = false;
//             });
//     },
// });




// // const authSlice = createSlice({
// //     name: 'auth',
// //     initialState,
// //     reducers: {},
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(register.fulfilled, (state, action) => {
// //                 state.user = action.payload.user;
// //                 state.token = action.payload.token;
// //                 state.isLoginIn = true;
// //             })
// //             .addCase(register.rejected, (state, action) => {
// //                 state.error = action.payload;
// //             })
// //             .addCase(logIn.pending, (state) => {
// //                 state.isLodin = true;
// //             })
// //             .addCase(logIn.fulfilled, (state, action) => {

// //                 state.user = action.payload.user;
// //                 state.token = action.payload.token;
// //                 state.isLoginIn = true;
// //             })
// //             .addCase(logIn.rejected, (state, action) => {

// //                 state.error = action.payload;
// //             })
// //             .addCase(logOut.fulfilled, (state) => {
// //                 state.user = { name: null, email: null };
// //                 state.token = null;
// //                 state.isLoginIn = false;
// //             })
// //             .addCase(fetchCurretUser.pending, (state) => {
// //                 state.isFetchingCurrentUser = true;
// //             })
// //             .addCase(fetchCurretUser.fulfilled, (state, action) => {
// //                 state.user = action.payload;
// //                 state.isLoginIn = true;
// //                 state.isFetchingCurrentUser = false;
// //             })
// //             .addCase(fetchCurretUser.rejected, (state, action) => {
// //                 state.isFetchingCurrentUser = false;
// //                 state.error = action.payload;
// //             });
// //     },
// // });

// export const authReducer = authSlice.reducer;