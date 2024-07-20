import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { writeStringifiedData } from '../utils/unificate.js';

export const removeAllContacts = async () => {
  try {
    await writeStringifiedData([]);
  } catch (error) {
    console.error('Fail to remove all contacts:', error);
  }
};

removeAllContacts();
