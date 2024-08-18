import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selector";

export const selectContacts = (state) => state.contacts.items;

export const selectCurrentContact = (state) => state.contacts.currentContact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
      );
    });
  }
);

export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;