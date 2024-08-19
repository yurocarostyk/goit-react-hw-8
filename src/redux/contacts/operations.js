import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  notifyOnContactAdd,
  notifyOnContactEdit,
  notifyOnContactRemove,
} from "../../helpers/hotToasters";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const { name, number } = newContact;
    try {
      const response = await axios.post("/contacts", { name, number });
      notifyOnContactAdd();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      notifyOnContactRemove();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/edit",
  async (editedContact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${editedContact.id}`, {
        name: editedContact.name,
        number: editedContact.number,
      });
      notifyOnContactEdit();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);