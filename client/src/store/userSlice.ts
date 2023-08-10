import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/userAction";

export type Userdata = {
  name: string;
  _id: string;
  email: string;
};
// Define a type for the slice state
interface UserState {
  users: Userdata[] | [];
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state);
    },
    decrement: (state) => {
      console.log(state);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<string>) => {
      console.log(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users=action.payload
      })
      .addCase(fetchUsers.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
