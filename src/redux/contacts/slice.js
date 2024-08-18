import { createSlice } from "@reduxjs/toolkit";

import { logout } from "../auth/operation";

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operation";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentContact: null,
  },
  reducers: {
    setCurrentContact(state, { payload }) {
      state.currentContact = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;

        state.items = state.items.map((contact) => {
          return contact.id === payload.id
            ? { ...payload, name: payload.name, number: payload.number }
            : contact;
        });
        state.currentContact = null;
      })
      .addCase(editContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(logout.rejected, (state) => {
        state.items = [];
      });
  },
});

export default contactsSlice.reducer;

export const { setCurrentContact } = contactsSlice.actions;