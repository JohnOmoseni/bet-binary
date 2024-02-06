import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
	isLoading: false,
	isError: false,
	hasAnimated: false,
	screenSize: "",
};

const appSlice = createSlice({
	name: "app",
	initialState: initialAppState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},

		setIsError: (state, action) => {
			state.isError = action.payload;
		},
		setHasAnimated: (state, action) => {
			state.hasAnimated = action.payload;
		},

		setScreenSize: (state, action) => {
			state.screenSize = action.payload;
		},
	},
});

export default appSlice.reducer;
export const { setIsLoading, setIsError, setScreenSize, setHasAnimated } =
	appSlice.actions;
