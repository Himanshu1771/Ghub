import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost", async ({ username }) => {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
});


const GetSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading:false,
    error:null
  
    },

  extraReducers: {
        [getPost.pending]: (state, action) => {
          state.loading = true;
        },
        [getPost.fulfilled]: (state, action) => {
          state.loading = false;
          state.post = [action.payload];
        },
        [getPost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      }
      })

  
      // export const {setEdit} = GetSlice.actions
      export default GetSlice.reducer;