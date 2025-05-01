import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from './filtersSlice';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
  builder
  .addCase(fetchContacts.pending, (state)=> {
    state.loading = true;
  })
  .addCase(fetchContacts.fulfilled, (state, action)=> {
    state.loading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase(fetchContacts.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
  .addCase(addContact.pending, (state)=> {
    state.loading = true;
  })
  .addCase(addContact.fulfilled, (state, action)=> {
    state.loading = false;
    state.error = null;
    state.items.push(action.payload);
  })
  .addCase(addContact.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
  .addCase(deleteContact.pending, (state)=> {
    state.loading = true;
  })
  .addCase(deleteContact.fulfilled, (state, action)=> {
    state.loading = false;
    state.error = null;
    state.items = state.items.filter((contact) => contact.id !== action.payload.id);
  })
  .addCase(deleteContact.rejected, (state, action)=> {
    state.loading = false;
    state.error = action.payload;
  })
}
});


const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);


export default contactsSlice.reducer;
