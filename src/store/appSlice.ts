
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppThunk, RootState } from './store'

// export const increAsync2 = createAsyncThunk<number, number, { state: RootState }>(
//   'app/increAsync2',
//   async (payload) => {
//     const res = await new Promise<number>(resolve => {
//       setTimeout(() => {
//         resolve(10 + payload);
//       }, 5000);
//     });
//     return res;
//   }
// );

let initialState = {
  count: 0,
  user: {
    name: 'nick',
    phone: 123,
  },
  loading: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<number>) => {
      state.count += payload
    },
    decrement: state => {
      state.count -= 5
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(increAsync2.pending, (state, { meta: { arg } }) => {
      
  //   });
  // }
})

export const { increment, decrement, setLoading } = counterSlice.actions;

// 异步方法
export const increAsync = (payload:number = 0): AppThunk => async (dispatch, getState) => {
  const { app: { count } } = getState();
  dispatch(setLoading(true))
  setTimeout(() => {
    dispatch(increment(payload + 5));
    dispatch(setLoading(false))
  }, 1000);
};

export default counterSlice.reducer


