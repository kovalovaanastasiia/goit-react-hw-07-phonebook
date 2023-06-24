import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL =
  'https://6496e6dd83d4c69925a33840.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`${API_BASE_URL}/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async values => {
    const response = await axios.post(`${API_BASE_URL}/contacts`, values);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`${API_BASE_URL}/contacts/${id}`);
    return id;
  }
);
