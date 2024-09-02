import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name:"cart",
  initialState: {
    items: [],
  },reducers: {
    addItem: (state,action) => {
      // Mutating the state here/directly modifying the state
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state,action) => {
      state.items.pop();
    },
    // originalState=["Pizza"]
    clearCart: (state,action) => {
      // console.log(state) // ["pizza"]
      // state=[];
      // console.log(state); // []


      //RTK -either mutate the existing state or return a new state
      //state.items.length = 0;

      return {items : []}; //this new object will be replaced inside the originalState = {items: []}
    },
  },
});

export const {addItem,removeItem,clearCart} =cartSlice.actions;

export default cartSlice.reducer;