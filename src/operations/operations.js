import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL =
  'https://6496e6dd83d4c69925a33840.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contacts`, values);
      return response.data;
    } catch (error) {
      console.error('Ошибка при добавлении контакта:', error);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/contacts/${id}`);
      return id;
    } catch (error) {
      console.error(`Ошибка при удалении контакта с идентификатором ${id}:`, error);
      throw error;
    }
  }
);
