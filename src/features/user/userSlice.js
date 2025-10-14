import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "MotherFucker 🤡",
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUsername(state, action) {
            state.name = action.payload;
        },
    },
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;