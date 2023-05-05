import { addContactItem, deleteContactItem, fetchContacts } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const arrActions = [fetchContacts, addContactItem, deleteContactItem];

const getActions = type => isAnyOf(...arrActions.map(action => action[type]));

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfild = state => {
  state.isLoading = true;
  state.error = '';
};
const handleFulfildAll = (state, { payload }) => {
  state.items = payload;
};

const handleFulfildAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfildDelete = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
  // state.filter(el => el.id !== payload),
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfildAll)
      .addCase(addContactItem.fulfilled, handleFulfildAdd)
      .addCase(deleteContactItem.fulfilled, handleFulfildDelete)

      .addMadcher(getActions('pending'), handlePending)
      .addMadcher(getActions('rejected'), handleRejected)
      .addMadcher(getActions('fulfilled'), handleFulfild);
  },
});

// export const { addContactItem, deleteContactItem } = ContactSlice.actions;
export const contactsReducer = ContactSlice.reducer;
