import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const generateContacts = async (number) => {
  const newContactsArr = Array.from({ length: number }, createFakeContact);
  try {
    const existData = await fs.readFile(PATH_DB, 'utf-8');
    const data = [...JSON.parse(existData), ...newContactsArr];
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (error) {
    console.error('Fail to generate contacts:', error);
  }
};

generateContacts(5);
