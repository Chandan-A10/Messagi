import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllUser } from "../utils/getAllUsers";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  // if you type your function argument here
  async () => {
    const response = await getAllUser()
    return response
  }
);
