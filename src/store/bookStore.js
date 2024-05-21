import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBooks, deleteBook, editBook, addNewBook } from "../api/bookApi";

const initialState = {
  books: [],
  error: null,
  isLoading: false,
};

export const addNewBookAction = createAsyncThunk(
  "book/addNewBookAction",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addNewBook(book);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editBookAction = createAsyncThunk(
  "book/editBookAction",
  async ({ bookId, updatedBook }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await editBook( updatedBook,bookId);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllBookAction = createAsyncThunk(
  "book/getAllBookAction",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getAllBooks();
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBookAction = createAsyncThunk(
  "book/deleteBookAction",
  async (bookId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await deleteBook(bookId);
      return bookId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getAllBookAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBookAction.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(editBookAction.fulfilled, (state, action) => {
        state.books = state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        );
      })
      .addCase(addNewBookAction.fulfilled, (state, action) => {
        state.books.push(action.payload);
      });
  },
});

export const bookReducer = bookSlice.reducer;
export const bookAction = bookSlice.actions;
