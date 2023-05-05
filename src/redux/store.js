import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    // error: '',
    // isLoading: true,
  },
});
