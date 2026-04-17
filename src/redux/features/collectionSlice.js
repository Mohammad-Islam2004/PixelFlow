import { createSlice } from "@reduxjs/toolkit"
import { toast, Zoom } from "react-toastify"

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id,
      )
      if (!alreadyExist) {
        state.items.push(action.payload)
        localStorage.setItem("collection", JSON.stringify(state.items))
        toast.success("Successfully saved to collection.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        })
      } else {
        toast.warn("Already exist in  collection.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        })
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem("collection", JSON.stringify(state.items))
      toast.success("Removed from  collection.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        })
    },
    clearCollection: (state) => {
      state.items = []
      localStorage.removeItem("collection")
    },
  },
})

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions

export default collectionSlice.reducer
