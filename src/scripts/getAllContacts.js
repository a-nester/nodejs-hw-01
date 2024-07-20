import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { readParsedData } from '../utils/unificate.js';

export const getAllContacts = async () => {
  const data = await readParsedData();
  return data;
};

console.log(await getAllContacts());
