import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosition, getAddress } from "../../services/apiGeocoding";

const initialState = {
    status: "idle", // loading, success, error
    name: "",
    address: "",
    position: {},
    errorAddress: null,
}

async function fetchLocation() {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", fetchLocation);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUsername(state, action) {
            state.name = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddress.pending, (state) => {
            state.status = "loading";
        }).addCase(fetchAddress.fulfilled, (state, action) => {
            state.status = "idle";
            state.position = action.payload.position;
            state.address = action.payload.address;
            state.error = null;
        }).addCase(fetchAddress.rejected, (state, action) => {
            state.status = "error";
            state.errorAddress = action.error.message;
        });
    }
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;